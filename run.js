const commander = require('commander')

commander
.version('1.0.0', '-v, --version')
.usage('[OPTIONS]...')
.option('-p, --port <value>', 'port number to use, default 3000', 3000)
.option('-t, --thisip <value>','IP of the interface to bind')
.option('-b, --broadcastip <value>','IP Range to broadcast to','255.255.255.255')
.option('-v, --video <value>', 'Request video stream on startup (lq,hq)'/*,'hq'*/)
.option('-a, --audio', 'Run with audio tunneling support (requires "speaker" npm package)')
.option('-r, --reconnect', 'Automatically restart the connection once disconnected')
.option('-pw, --password <value>', 'Require a password as a ?pw= query parameter to use the webserver')
.option('-e, --eval', 'eval mode, WARNING ⚠️ DO NOT USE THIS IN PRODUCTION')
.parse(process.argv);

const pages = {
  "Embedded Video": "/v",
  "Raw Video": "/v.mjpg",
}
const endpoints = {
  "Reconnect": "/reconnect",
  "Light ON": "/func/sendCMDSetWhiteLight?isOn=true",
  "Light OFF": "/func/sendCMDSetWhiteLight?isOn=false",
  "IR ON": "/func/sendCMDIr?isOn=true",
  "IR OFF": "/func/sendCMDIr?isOn=false",
  "Lamp ON": "/func/sendCMDLamp?isOn=true",
  "Lamp OFF": "/func/sendCMDLamp?isOn=false",
  "Up": "/func/sendCMDPtzControl?direction=0",
  // "Rotate Up end": "/func/sendCMDPtzControl?direction=1",
  "Down": "/func/sendCMDPtzControl?direction=2",
  // "Rotate Down end": "/func/sendCMDPtzControl?direction=3",
  "Left": "/func/sendCMDPtzControl?direction=4",
  // "Rotate Left end": "/func/sendCMDPtzControl?direction=5",
  "Right": "/func/sendCMDPtzControl?direction=6",
  // "Rotate Right end": "/func/sendCMDPtzControl?direction=7",
  "Rotate STOP": "/func/sendCMDPtzStop",
  "Rotate Reset": "/func/sendCMDPtzReset",
  "Reboot": "/func/sendCMDReboot",
  "Exit": "/exit",
}

const options = commander.opts()
console.log(options)
const PPPP = require('./pppp')
if (options.audio) {
  const speaker = require('./speaker')
}

let p = null
let firstrun = true

function setupPPPP() {
  if (p) {
    console.log('pppp was already open, closing...')
    p.destroy()
    p = null
  }
  p = new PPPP(options)

  p.on('log', console.log)

  p.on('connected', (address, port) => {
    console.log(`Connected to camera at ${address}:${port}`)
    setTimeout(p.sendCMDgetParams.bind(p), 1000)
  })

  p.on('cmd', (data, raw) => {
    console.log(data)
    if (firstrun) {
      if (data.hasOwnProperty("cmd")) {
        if (data.cmd === 101) {
          firstrun = false;
          if (options.video === 'hq') {
            setTimeout(p.sendCMDrequestVideo1.bind(p), 1000)
          } else if (options.video === 'lq') {
            setTimeout(p.sendCMDrequestVideo2.bind(p), 1000)
          }
          if (options.audio) {
            setTimeout(p.sendCMDrequestAudio.bind(p), 2000)
          }
        }
      }
    }
  })

  p.on('audioFrame', (audioFrame) => {
    if (options.audio) {
      speaker.write(audioFrame.frame)
    }
    // console.log(audioFrame)
  })

  p.on('videoFrame', (videoFrame) => {
    // console.log(videoFrame)
    let s = '--xxxxxxkkdkdkdkdkdk__BOUNDARY\r\n'
    s += 'Content-Type: image/jpeg\r\n\r\n'
    videoStream.write(Buffer.from(s))
    videoStream.write(videoFrame.frame)
  })

  p.on('error', (err) => {
    console.log(`socket error: ${err}`)
  })

  p.on('disconnected', (address, port) => {
    console.log(`Disconnected from camera at ${address}:${port}`)
    if (options.reconnect) {
      console.log("Reconnecting ...")
      setupPPPP()
    }
  })
}

setupPPPP()

var url = require('url')
var path = require('path')
const querystring = require('querystring')

function mergeUrl(baseUrl, params) {
  let purl = url.parse(baseUrl)
  let query = querystring.parse(purl.query)
  for (let key in params) {
      query[key] = params[key]
  }
  purl.search = querystring.stringify(query)
  return url.format(purl)
}

function makeNavItem(url, text) {
  return `<li class="nav-item"><a class="nav-link" href="${url}">${text}</a></li>`
}
function makeHrefButton(url, text) {
  return `<div class="col col-md col-lg mb"><button type="button" onclick="window.location.href='${url}';">${text}</button></div>`
}
function makeAjaxButton(url, text) {
  return `<div class="col col-md col-lg mb"><button type="button" onclick="sendAjaxRequest('${url}');">${text}</button></div>`
}
function makeFormButton(url, text) {
  return `<div class="col col-md col-lg mb"><input type="submit" class="btn btn-primary w-100" formaction='${url}'" value='${text}'></div>`
}
function makeButtonRow(buttons) {
  return `<div class="row">${buttons}</div>`
}
function splitDict(dict, chunkSize) {
  let chunks = []
  let chunk = {}
  let i = 0
  for (let key in dict) {
    if (dict.hasOwnProperty(key)) {
      if (i >= chunkSize) {
        chunks.push(chunk)
        chunk = {}
        i = 0
      }
      chunk[key] = dict[key]
      i++
    }
  }
  if (i > 0) {
    chunks.push(chunk)
  }
  return chunks
}

//http server with mjpeg
const PassThrough = require('stream').PassThrough
var videoStream = new PassThrough()


const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
  try {
    if (req.url === '/favicon.ico') return
    console.log('[' + req.socket.remoteAddress + '] ' + req.method + ': ' + req.url)
    const purl = url.parse(req.url); // console.log(purl)
    const ppath = path.parse(purl.pathname); // console.log(ppath)
    const query  = querystring.parse(purl.query); // console.log(query)
    if (options.password) {
      if (query['pw'] !== options.password) {
        res.statusCode = 403
        res.end(JSON.stringify({message: 'invalid password' }))
        return
      }
    }
    if (purl.pathname === '/') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      let content = fs.readFileSync("index.html", "utf-8");
      navitems = ""
      for (let key in pages) {
        if (pages.hasOwnProperty(key)) {
          navitems += makeNavItem(mergeUrl(pages[key], query), key)
        }
      }
      content = content.replace("{{navitems}}", navitems)
      buttons = ""
      for (let key in endpoints) {
        if (endpoints.hasOwnProperty(key)) {
          buttons += makeAjaxButton(mergeUrl(endpoints[key], query), key)
        }
      }
      content = content.replace("{{buttons}}", buttons)
      res.end(content)
    } else if (purl.pathname === '/v') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end(
        '<!DOCTYPE html>\r\n<http><head></head><body><img src="'+mergeUrl("/v.mjpg", query)+'"></body></html>'
      )
    } else if (purl.pathname === '/v.mjpg') {
      res.setHeader(
        'Content-Type',
        'multipart/x-mixed-replace; boundary="xxxxxxkkdkdkdkdkdk__BOUNDARY"'
      )
      videoStream.pipe(res)
    } else if (purl.pathname === '/exit') {
      process.exit()
    } else if (purl.pathname === '/reconnect') {
      setupPPPP()
    } else if (purl.pathname.startsWith('/func/')) { // WARNING ⚠️ DO NOT USE THIS IN PRODUCTION
      if (!options.eval) {
        res.statusCode = 403
        res.end(JSON.stringify({message: 'eval mode is disabled 🙄'}))
        return
      }
      let name = ppath.base
      let args = ""
      for (let e in query) {
        if (e === "pw") continue;
        if (args.length > 0) {
          args += ','
        }
        args += e + "=" + query[e]
      }
      let eval_str = `p.${name}(${args})`
      console.log(eval_str)
      let ret = eval(eval_str)
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify({message: 'ok', result: ret}))
    } else {
      res.statusCode = 404
      res.end(JSON.stringify({message: 'not found'}))
    }
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end(JSON.stringify({message: e.message, error: e}))
  }
})

server.listen(options.port)

process.on('SIGINT', () => {
  server.close()
  server.unref()
  p.destroy()

  setTimeout(() => {
    console.log('exiting.')
    process.exit()
  }, 1000)
})

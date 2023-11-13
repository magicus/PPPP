https://github.com/i-lnk/libvdp/blob/6a9cd1aba9268031dd741c6b0d21d4055cdb26a4/src/PPPPChannel.h

The device sends MSG_ALIVE to the controller.
The controller responds with MSG_ALIVE_ACK.

Then the controller sends MSG_ALIVE to the device, and the device responds with MSG_ALIVE_ACK.

After 103 seconds, the controller sends MSG_CLOSE. The device replies with MSG_CLOSE.
But after just 2 more seconds, the device sends MSG_ALIVE, which is ACKed by the
controller. And then the controller sends MSG_ALIVE, which the device ACKs.

After 9 more seconds, the controller sends MSG_CLOSE again...? Then it immediately
sends MSG_ALIVE, but the device has already replied with MSG_CLOSE.

Discovery starts by the controller sending out LANSEARCH. The device replies with
PUNCH_PKT, to which controller replies with PUNCH_PKT.

Then the device sends MSG_P2P_RDY, with its UID.

After that, the controller can start sending commands.

reset camera location:
{
  "pwd": "6666",
  "parms": 1,
  "value": 132,
  "cmd": 128,
  "pro": "ptz_control",
  "user": "admin"
}

-- skicka ljud till kameran:

{
  "pwd": "6666",
  "isSend": 1,
  "cmd": 300,
  "pro": "talk_send",
  "user": "admin"
}
{
  "cmd": 300,
  "result": 0
}
när svaret kommit, börja skicka ljuddata på kanal 3
när det är slut på ljud, skicka isSend: 0
{
  "pwd": "6666",
  "isSend": 0,
  "cmd": 300,
  "pro": "talk_send",
  "user": "admin"
}
{
  "cmd": 300,
  "result": 0
}
--- här är ljud ut klart
{
  "pro": "stream",
  "cmd": 111,
  "audio": 1,
  "user": "admin",
  "pwd": "6666"
}
{
  "pro": "stream",
  "cmd": 111,
  "audio": -1,
  "user": "admin",
  "pwd": "6666"
}

{
  "pro": "stream",
  "cmd": 111,
  "video": 0,
  "user": "admin",
  "pwd": "6666"
}


{
  "pwd": "6666",
  "cmd": 112,
  "pro": "get_wifi",
  "user": "admin"
}
{
  "cmd": 112,
  "result": 0,
  "conmode": 0,
  "ssid": "AP_MODE"
}
{
  "pwd": "6666",
  "cmd": 113,
  "pro": "scan_wifi",
  "user": "admin"
}
{
  "cmd": 113,
  "result": 0,
  "count": 9,
  "ssid[0]": "guest.ihse.net",
  "signal[0]": -9,
  "encryption[0]": 1,
  "ssid[1]": "ihse.net",
  "signal[1]": -9,
  "encryption[1]": 1,
  "ssid[2]": "vinden.ihse.net",
  "signal[2]": -14,
  "encryption[2]": 1,
  "ssid[3]": "guest.ihse.net",
  "signal[3]": -16,
  "encryption[3]": 1,
  "ssid[4]": "ihse.net",
  "signal[4]": -16,
  "encryption[4]": 1,
  "ssid[5]": "music.ihse.net",
  "signal[5]": -16,
  "encryption[5]": 1,
  "ssid[6]": "alt.ihse.net",
  "signal[6]": -22,
  "encryption[6]": 1,
  "ssid[7]": "3Bredband-E6D1",
  "signal[7]": -23,
  "encryption[7]": 1,
  "ssid[8]": "SKAF-Nighthawk_2GEXT",
  "signal[8]": -24,
  "encryption[8]": 1
}


HUH???
{
  "pwd": "6666",
  "cmd": 199,
  "pro": "get_record_param",
  "user": "admin"
}
{
  "cmd": 109,
  "result": 0,
  "recMode": 1,
  "sdstatu": 0,
  "isShowCapacity": 0
}

{
  "cmd": 101,
  "result": 0,
  "tz": -8,
  "time": 1699654116,
  "icut": 2,
  "batValue": 90,
  "batStatus": 1,
  "sysver": "HQLS_HK66_DP_20230802 20:08:13",
  "mcuver": "1.1.1.1",
  "isShow4KMenu": 0,
  "isShowIcutAuto": 1,
  "rotmir": 0,
  "signal": 100,
  "lamp": 1
}

{
  "user": "admin",
  "pwd": "6666",
  "cmd": 205,
  "pro": "get_record_day",
  "year": 2023
}
{
  "cmd": 205,
  "result": -1
}


{
  "pwd": "6666",
  "tz": -3600,
  "time": 1699650535,
  "cmd": 126,
  "pro": "set_datetime",
  "user": "admin"
}


--- varje gång man får ett paket ska man ack:a det.

om man har sänt paket 1, 2, 3 4,5,6   7,8,9 och får tillbaka ack från 1,2,3 och 7,8,9, då
vet man att 4,5,6 sannolikt försvunnit och behöver sändas om.

När jag startar en ny kanal, skicka första paketet 2 gånger omedelbart.
Sedan skicka igen efter  59.774-59.712=0.062 sekunder. Dvs ca 60 millisekunder.
60.226-60.176=0.05 dvs ca 50 ms. Vid en väl fungerande kommunikation kommer ACKen
normalt inom ca 3-4 ms.

12	0.095615	192.168.0.101	192.168.0.1	PPPP	0xd0	174	25249 → 23270 Len=74 (MSG_DRW:0;0)
13	0.131583	192.168.0.101	192.168.0.1	PPPP	0xd0	174	25249 → 23270 Len=74 (MSG_DRW:0;0)
14	0.168549	192.168.0.101	192.168.0.1	PPPP	0xd0	174	25249 → 23270 Len=74 (MSG_DRW:0;0)
15	0.218790	192.168.0.101	192.168.0.1	PPPP	0xd0	174	25249 → 23270 Len=74 (MSG_DRW:0;0)
16	0.266731	192.168.0.1	192.168.0.101	PPPP	0xd1	110	23270 → 25249 Len=10 (MSG_DRW_ACK:0)
17	0.303102	192.168.0.1	192.168.0.101	PPPP	0xd0	247	23270 → 25249 Len=147 (MSG_DRW:0;0)

0.131583-0.095615=0.035968 == 35 ms
0.168549-0.131583=0.036966
0.218790-0.168549=0.050241
0.303102-0.218790=0.084312

53.599932-53.569872=0.03006

Devicen är galen och skickar om DRW typ varje millisekund tills den får en ACK...

controllern skickar ack-paket med med samma index upprepat flera gånger. verkar poänglöst.
(men kan alltså hända)

De verkar skicka en ack per paket de fått. Ibland samlar de ihop de till flera ackar i samma paket.

Man kan börja skicka nya paket även om man inte fått ACK på de gamla. Men tills man fått en ACK
så fortsätter man skicka om det gamla paketet.

Det verkar vettigt att skicka ett ACK-paket för varje mottaget data-paket. (Mitt förra ACK kanske försvann)
Men inte vettigt att lägga in samma nummer flera gånger.

index börjar på 0

0. Byt min tidszon till GMT.
1. Trycka på foto
2. Trycka på video
3. Ändra lösenord från 6666 till 7777
4. Ändra lösenord från 7777 till 6666
5.   -- edit camera password: 7777 -- invalid password response!
6.    -- cloud???
  stoppa appen
  starta appen
7. Starta en identifikation-sgrej med IR
8. Försöka provocera IR rörelse
9.  Stänga av identifikations-grej
10. Spela in ljud, skrik "TROLOLO"
11. Stoppa ljud
12. Lämna appen
13. Starta upp appen igen
14. Lämna appen igen
15. Återställ tidszon.


när det gått en sekund sen senaste skickade paketet, skicka keep alive.

{
  "pwd": "6666",
  "cmd": 107,
  "pro": "get_alarm",
  "user": "admin"
}
{
  "cmd": 107,
  "result": 0,
  "pirenable": 1,
  "pirsensitive": 3,
  "pirvideo": 0,
  "pirPush": 0,
  "pirvideotime": 10,
  "pirDelayTime": 30,
  "AalarmInterval": 2,
  "pirCloudUpCount": 50
}
{
  "user": "admin",
  "pirvideotime": 10,
  "pirvideo": 0,
  "pirPush": 0,
  "pirenable": 1,
  "pirDelayTime": 30,
  "cmd": 108,
  "pirsensitive": 3,
  "pwd": "6666",
  "pro": "set_alarm"
}
{
  "cmd": 108,
  "result": 0
}
{
  "pwd": "6666",
  "cmd": 107,
  "pro": "get_alarm",
  "user": "admin"
}
{
  "cmd": 107,
  "result": 0,
  "pirenable": 1,
  "pirsensitive": 3,
  "pirvideo": 0,
  "pirPush": 0,
  "pirvideotime": 10,
  "pirDelayTime": 30,
  "AalarmInterval": 2,
  "pirCloudUpCount": 50
}
{
  "user": "admin",
  "pirvideotime": 10,
  "pirvideo": 0,
  "pirPush": 0,
  "pirenable": 0,
  "pirDelayTime": 30,
  "cmd": 108,
  "pirsensitive": 3,
  "pwd": "6666",
  "pro": "set_alarm"
}
{
  "cmd": 108,
  "result": 0
}


47.106.144.32
Frame 34464: 300 bytes on wire (2400 bits), 300 bytes captured (2400 bits) on interface en0, id 0
Radiotap Header v0, Length 34
802.11 radio information
IEEE 802.11 QoS Data, Flags: .p.....TC
Logical-Link Control
Internet Protocol Version 4, Src: 192.168.7.100, Dst: 47.106.144.32
    0100 .... = Version: 4
    .... 0101 = Header Length: 20 bytes (5)
    Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT)
    Total Length: 212
    Identification: 0x0661 (1633)
    000. .... = Flags: 0x0
    ...0 0000 0000 0000 = Fragment Offset: 0
    Time to Live: 255
    Protocol: TCP (6)
    Header Checksum: 0x2d2c [validation disabled]
    [Header checksum status: Unverified]
    Source Address: 192.168.7.100
    Destination Address: 47.106.144.32
Transmission Control Protocol, Src Port: 52432, Dst Port: 9093, Seq: 1, Ack: 1, Len: 172
Hypertext Transfer Protocol
    POST /push/send HTTP/1.0\r\n
    Content-Type:application/json\r\n
    Authorization:761d89d9yf83f649fc\r\n
    Content-Length: 58\r\n
    \r\n
    [HTTP request 1/1]
    [Response in frame: 34667]
    File Data: 58 bytes
JavaScript Object Notation: application/json
Hypertext Transfer Protocol

JavaScript Object Notation: application/json
{"app_id":"DGOD156942PPPHM","app_key":"SHIX","msg_type":1}

(ip.src == 192.168.7.100)

response:

{"code":"200","status":"ok"}

{
	"cmd":	100,
	"admin":	1,
	"result":	0,
	"restrict":	0,
	"checkstr":	"SHIX",
	"mode":	110,
	"type":	600,
	"cloud_key":	"581052"
}

47.106.144.32, port 9093!!!

{
  "pushIp": "47.106.144.32",
  "pro": "set_cypush",
  "user": "admin",
  "pushInterval": 30,
  "pushPort": 9093,
  "cyPwd": "admin123",
  "cmd": 1,
  "isPushVideo": 0,
  "isPushPic": 0,
  "pwd": "6666",
  "cyAdmin": "admin"
}


Jag fick detta tillbaka!
POST /push/send HTTP/1.0
Content-Type:application/json
Authorization:761d89d9yf83f649fc
Content-Length: 58

{"app_id":"DGOD156942PPPHM","app_key":"SHIX","msg_type":1}


getting NTP from  120.25.115.20

dig nms2.hdwificampro.com 43.134.68.25

dig nms3.hdwificampro.com 43.130.0.121
dig ntp1.aliyun.com 	120.25.115.20

  "pirsensitive": 3, = high, 2 = normal, 1 = low



//Command Channel head
typedef struct _CMD_CHANNEL_HEAD
{
    unsigned short startcode;
    unsigned short cmd;
    unsigned short len;
    unsigned short version;
	char 		   d[0];
}CMD_CHANNEL_HEAD, *PCMD_CHANNEL_HEAD;



typedef struct tag_AV_HEAD
{
    unsigned int   		startcode;	//  0xa815aa55
    unsigned char		type;		//  0->264 idr frame 1->264 p frame
    unsigned char  	    streamid;
    unsigned short  	militime;	//  diff time
    unsigned int 		sectime;	//  diff time
    unsigned int    	frameno;	//  frameno
    unsigned int 		len;		//  data len
    unsigned char		version;	// version
    unsigned char		sessid;		//ssid
    unsigned char		other[2];
    unsigned char		other1[8];
	char 				d[0];
}AV_HEAD,*PAV_HEAD;


https://github.com/niufuwei/newBabyWith/blob/93bc61e402588a53957c9a901e6d7faa82e9a2f8/BabyWith/BabyWith/Classes/PCMPlayer.mm


Audio header: är exakt 32 bytes lång
55:aa:15:a8: -- magic
aa:01: -- stream type, aa:01 == audio, 03:00 == video
00:00 --- ?
:cc:a9:4e:65:  -- UNIX timestamp, i LE!
aa:aa:aa:aa:
40:01:00:00 --- size of data, i LE
:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa:aa

55:aa:15:a8:
aa: <-- type
01: <--- stream ID
00:00 <--- milli time
:cc:a9:4e:65:  -- UNIX timestamp, i LE!
aa:aa:aa:aa: <--- frame number
40:01:00:00 <--- size

VIDEO header:
55:aa:15:a8: -- magic
03:00
00:00
:cc:a9:4e:65:  -- UNIX timestamp, i LE! (samma)
01:00:00:00 <<--- frame number LE
3c:41:00:00 <<-- length, of entire frame, not just this packet!
00:00:00:00 --- unknown, always null, version, sessid + 2 unknwon bytes
00:00:05:00 --- unknown
00:00:00:00 --- unknown, always null

TALK header:
"0": "55:aa:15:a8: --- magic
  08:01: -- maybe the last byte 00 == video, 01 == audio? 08 might indicate different codec than the audio-in, which uses "aa"
  00:00:
  00:00:00:00 --- we dont set timestamp
  :00:00:00:00 -- dont set frame number
  :40:01:00:00 -- size
  :00:00:00:00: -- null
  00:00:00:00: --- null
  00:00:00:00: -- null
video data payload is max 1024 bytes per packet! if it is larger, it is split up and just sent consecutively.

POST /push/send HTTP/1.0
Content-Type:application/json
Authorization:761d89d9yf83f649fd
Content-Length: 58

{"app_id":"DGOD156942PPPHM","app_key":"SHIX","msg_type":1}

DETTA FUNKAR FÖR TALK:
plocka ut rådata
kör den genom adpcm.js
och sen behandla som single channel, 8k samle rate, 16 bit little endian raw pcm:
ffplay -f s16le -ar 8k -ac 1  talk.raw

Skulle kanske funka även för audio in, men jag verkar inte ha en fungerande mic?


audio är  Intel DVI ADPCM (ADP4)  ???

 ADP4 4:1 Intel/DVI ADPCM apparently.

IMA ADPCM:
https://wiki.multimedia.cx/index.php/IMA_ADPCM

11.025 kHz 1-channel, 4-bit

 	4:1 Intel/DVI ADPCM
  or maybe https://wiki.multimedia.cx/index.php/IMA_ADPCM
  difference unclear?
  or DVI4  from RFC 1890 https://www.freesoft.org/CIE/RFC/1890/10.htm, https://wiki.multimedia.cx/index.php/DVI_IMA_ADPCM

Check how these are different!

These are somehow treated specially!
"ABC"
"ACCQ"
"BCCQ"
"DBG"
"DDD"
"DGB"
"DGHG"
"DGO"
"DGOA"
"DGOB"
"DGOC"
"DGOD"
"DGOE"
"DGOF"
"DGOG"
"DGOH"
"DGOI"
"DGOJ"
"DGOK"
"EEE"
"FFF"
"HBW"
"NMSA"
"NMSB"
"OEMAAAA"
"OEMAAAB"
"PETA"
"PPIL"
"VMV"
"XIAODOU"
"YSJ"

and this is specially specially "NNN"

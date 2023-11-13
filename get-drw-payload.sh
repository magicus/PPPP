#!/bin/bash
infile=$1
outfile=$2

cat $infile | jq '.. | .["_ws.lua.text"]? // empty'  | jq -s 'map({index: .["pppp.index"], data: .["pppp.data"]})' | jq 'reduce .[] as $item ({}; .[$item.index] = $item.data)'  > $outfile

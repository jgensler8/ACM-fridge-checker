#!/bin/bash

filename=$1
open=0
openTime=""
closeTime=""
dataFile=/root/fridge/data

echo "" > $dataFile
echo "[" >> data
while true; do
  sleep 0.1
  while read line
   do
    if [ $line -eq 0 ] && [ $open -eq 0 ]
    then
      openTime=`date +"%Y-%m-%dT%H:%M:%SZ"`
      open=1
    else
      if [ $line -eq 1 ] && [ $open -eq 1 ]
      then
        closeTime=`date +"%Y-%m-%dT%H:%M:%SZ"`
	sed -i "s/]/,/g" data
	sed -i "s/]/,/g" data-$(date +"%H")
	sed -i "1s/^{/[{ /" data-$(date +"%H")
	echo "{ \"startTime\" : \""$openTime"\", \"endTime\" : \""$closeTime"\" }]" >> data
	echo "{ \"startTime\" : \""$openTime"\", \"endTime\" : \""$closeTime"\" }]" >> data-$(date +"%H")
	echo "{ \"startTime\" : \""$openTime"\", \"endTime\" : \""$closeTime"\" }]"
        open=0
      fi
    fi
  done < $filename
done
IFS=' '

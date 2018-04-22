#!/bin/bash

output="$(top -bn2 | grep "Cpu(s)" |sed "s/.*, *\([0-9.]*\)%* id.*/\1/" |awk '{print 100 - $1"%"}'
 vmstat -s | awk  ' $0 ~ /total memory/ {total=$1 } $0 ~/free memory/ {free=$1} $0 ~/buffer memory/ {buffer=$1} $0 ~/cache/ {cache=$1} END{print (total-free-buffer-cache)/total*100}'
 du -sh ./  |awk '{print $1}'
)"
 
echo "$output"

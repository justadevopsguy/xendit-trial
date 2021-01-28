#!/bin/sh

nodeProc=`ps -ef | grep node | grep -v grep`

if [ -n "$nodeProc" ];  then
	echo "success"
        exit 0
else
  exit 1
fi

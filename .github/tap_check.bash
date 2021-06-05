#!/bin/bash
ret=0

while read line; do
	echo "$line"
	if [[ $line == 'not ok '* ]] ; then
		ret=1
	fi
done

exit "$ret"

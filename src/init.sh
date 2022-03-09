#!/bin/bash

echo "infinite loop"

while true
do
    echo '...... docker exec -it ${ID} /bin/bash ......'
    echo '...... sleep 5 ......'
    sleep 5
done


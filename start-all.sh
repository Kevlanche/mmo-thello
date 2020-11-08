#!/bin/sh
trap "exit" INT TERM ERR
trap "kill 0" EXIT


cd game
sh run-kl-services.sh &
sh watch.sh &
cd -

cd frontend
npm run buildWatch &
cd -

cd frontend/public
python -m SimpleHTTPServer &
cd -

wait

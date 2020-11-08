#!/bin/sh
set -e

java -Dkl.includes=/Users/kevlanche/repo/kln/kl -jar /Users/kevlanche/repo/kln/external/klc/java/klc.jar /Users/kevlanche/repo/mmo-thello/game

cp dst/mmothello/Client* ../frontend/src/
cp dst/mmothello/Server* ../backend/gamesession/

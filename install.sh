#!/usr/bin/bash

pkg update && pkg upgrade
pkg install git nodejs ffmpeg imagemagick yarn
yarn install
yarn
node .

echo "Installation complete. To start the script, run: node ."

#!/usr/bin/env bash

echo 'Starting book data update'
rm -rv ./tmp;
git co -f;
git pull origin master;

# Download latest data from API
mkdir ./tmp;
curl -L https://api.jackreid.xyz/books/reading -o ./tmp/reading.json;
curl -L https://api.jackreid.xyz/books/toread -o ./tmp/toread.json;
curl -L https://api.jackreid.xyz/books/read -o ./tmp/read.json;

# Replace data with tmp
rm -r ./data/books; mv ./tmp ./data/books;

# Update git
git add data && git commit -m 'update books' && git push origin master;

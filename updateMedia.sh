#!/usr/bin/env bash

echo 'Starting book and film data update'
rm -rv ./tmp;
git checkout -f;
git pull origin master;

# Download latest data from API
mkdir ./tmp;
curl -L https://api.jackreid.xyz/books/reading -o ./tmp/reading.json;
curl -L https://api.jackreid.xyz/books/toread -o ./tmp/toread.json;
curl -L https://api.jackreid.xyz/books/read -o ./tmp/read.json;

curl -L https://api.jackreid.xyz/films/watched -o ./tmp/watched.json;
curl -L https://api.jackreid.xyz/films/towatch -o ./tmp/towatch.json;

# Replace data with tmp
rm ./data/books/*; rm -r ./data/films/*;

mv ./tmp/reading.json ./data/books/reading.json;
mv ./tmp/toread.json ./data/books/toread.json;
mv ./tmp/read.json ./data/books/read.json;

mv ./tmp/watched.json ./data/films/watched.json;
mv ./tmp/towatch.json ./data/films/towatch.json;

# Update git
git add data && git commit -m 'update books and films' && git push origin master;

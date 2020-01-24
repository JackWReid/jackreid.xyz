#!/usr/bin/env bash

function installed {
  cmd=$(command -v "${1}")

  [[ -n "${cmd}" ]] && [[ -f "${cmd}" ]]
  return ${?}
}

function die {
  >&2 echo "Fatal: ${@}"
  exit 1
}

deps=(curl git)
for dep in "${deps[@]}"; do
  installed "${dep}" || die "Missing '${dep}'"
done

echo 'Starting book and film data update'
git checkout -f;
git pull origin master;

# Download latest data from API
curl -L https://api.jackreid.xyz/books/reading -o ./data/books/reading.json;
curl -L https://api.jackreid.xyz/books/toread -o ./data/books/toread.json;
curl -L https://api.jackreid.xyz/books/read -o ./data/books/read.json;

curl -L https://api.jackreid.xyz/films/watched -o ./data/films/watched.json;
curl -L https://api.jackreid.xyz/films/towatch -o ./data/films/towatch.json;

# Update git
echo "[$(date)] Committing updated media data files"
if [ -z "$(git status --porcelain)" ]; then
	echo "[$(date)] No changes found"
else
	echo "[$(date)] Changes found"
	git add . && git commit -m "[$(date)] Updated media data files" && git push origin master;
fi

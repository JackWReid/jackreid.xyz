const API_FILE_TARGET = 'https://api.github.com/repos/JackWReid/jackreid.xyz/contents/content/note/';

const formEl = document.querySelector('form');
const titleEl = formEl.querySelector('#title');
const bodyEl = formEl.querySelector('#body');
const tagsEl = formEl.querySelector('#tags');
const slugEl = formEl.querySelector('#slug');
const tokenEl = formEl.querySelector('#ghtoken');

function publishPost (filename, md) {
  const messageEl = document.querySelector('#submitmessage');
  const url = API_FILE_TARGET + filename;

  const payload = {
    message: `Shared note: ${filename}`,
    content: btoa(md),
    committer: {
      name: 'Jack Reid',
      email: 'hello@jackreid.xyz'
    }
  }

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/vnd.github.v3+json',
      Authorization: `token ${tokenEl.value}`
    },
    body: JSON.stringify(payload),
  }


  messageEl.innerText = 'Loading...';
  fetch(url, options).then(response => {
    if (response.ok) {
      messageEl.innerText = 'Submitted!'; 
    } else {
      messageEl.innerText = 'Failed!';
    }
  });

}

function onSubmit(e) {
  e.preventDefault();

  const vals = {
    title: titleEl.value,
    body: bodyEl.value,
    tags: tagsEl.value.split(', '),
    slug: slugEl.value

  };

  const date = new Date().toISOString();
  const filename = `${date.split('T')[0]}-${vals.slug}.md`;

  const md = `
---
title: "${vals.title}"\n
slug: ${vals.slug}\n
date: ${date}\n
tags:
${vals.tags.map(t => `  - ${t}`).join('\n')}
---

${vals.body}
  `;

  publishPost(filename, md);
}

function parseQs(qs) {
  const params = {};

  if (!qs) {
    return params;
  }

  const queries = qs.split('&');

  for (let i = 0; i < queries.length; i++) {
    let temp = queries[i].split('=');
    params[temp[0]] = temp[1];
  }

  return params;
}

function prefill() {
  const params = parseQs(location.search.split('?')[1]); 

  if (params.title) {
    titleEl.value = params.title;
  }

  if (params.body && params.url) {
    bodyEl.value =
`> ${decodeURI(params.body)}

— [${decodeURI(params.title)}](${decodeURI(params.url)})`;
  }

  tagsEl.value = 'link, article';
}

prefill();

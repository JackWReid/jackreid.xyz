function updateCurrently({ reading, watched }) {
  console.log(reading, watched);
  const watchedMark = document.querySelector('#watched-mark');
  const watchedLinkEl = document.createElement('a');
  watchedLinkEl.innerText = watched;
  watchedMark.innerText = '';
  watchedLinkEl.href = 'https://letterboxd.com/jackreid/films/diary/';
  watchedMark.appendChild(watchedLinkEl);
  return;
}

if (document.querySelector('#watched-mark')) {
  fetch('https://api.jackreid.xyz/currently')
    .then(response => response.json())
    .then(updateCurrently);
}


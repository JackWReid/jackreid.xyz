function updateCurrently({ reading, watched }) {
  const readingMark = document.querySelector('#reading-mark');
  const watchedMark = document.querySelector('#watched-mark');
  const readingLinkEl = document.createElement('a');
  const watchedLinkEl = document.createElement('a');
  readingLinkEl.innerText = reading;
  watchedLinkEl.innerText = watched;
  readingMark.innerText = '';
  watchedMark.innerText = '';
  readingLinkEl.href = 'https://www.goodreads.com/user/show/54047855-jack-reid';
  watchedLinkEl.href = 'https://letterboxd.com/jackreid/films/diary/';
  readingMark.appendChild(readingLinkEl);
  watchedMark.appendChild(watchedLinkEl);
  return;
}

if (document.querySelector('#reading-mark')) {
  fetch('/.netlify/functions/currently')
    .then(response => response.json())
    .then(updateCurrently);
}


import axios from 'axios';
import cheerio from 'cheerio';

const GOODREADS_URL = 'https://www.goodreads.com/user/show/54047855-jack-reid';
const LETTERBOXD_URL = 'https://letterboxd.com/jackreid/films/diary';

const GOODREADS_SELECTOR = '#currentlyReadingReviews .bookTitle';
const LETTERBOXD_SELECTOR = '.diary-entry-row .film-actions';

exports.handler = async (event, context) => {
  const goodreadsPromise = axios.get(GOODREADS_URL);
  const letterboxdPromise = axios.get(LETTERBOXD_URL);
  const responses = await Promise.all([goodreadsPromise, letterboxdPromise]);

  const goodreadsHtml = cheerio.load(responses[0].data);
  const letterboxdHtml = cheerio.load(responses[1].data);

  const reading = goodreadsHtml(GOODREADS_SELECTOR)[0].children[0].data;
  const watched = letterboxdHtml(LETTERBOXD_SELECTOR)[0].attribs['data-film-name'];

  console.log(`READING: ${reading}`);
  console.log(`WATCHED: ${watched}`);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=7200', // 2 hours
    },
    body: JSON.stringify({
      reading,
      watched,
    })
  };
};


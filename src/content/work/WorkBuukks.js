import React from 'react';

import WorkArticle from '../../components/WorkArticle';
import Photo from '../../components/Photo';

export default () => (
  <WorkArticle
    title="Buukks">
    <p><a href="https://buukks.xyz">Check it out</a></p>
    <p>Goodreads makes me sad, but I like to keep track of what I've read and what I want to read. So I built Buukks to do that without all the crazy cruft. It's very much a work in progress.</p>

    <p>It's built with React, with Express and Postgres for the API server, and deployed with <a href="https://zeit.co/now">Now</a>. The code for <a href="https://github.com/JackWReid/buukks-backend">the API</a> and <a href="https://github.com/JackWReid/buukks-web">the app</a> are available on GitHub.</p>
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/work/buukks/full-page.png" />
  </WorkArticle>
);

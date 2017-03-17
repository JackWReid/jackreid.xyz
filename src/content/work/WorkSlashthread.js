import React from 'react';

import WorkArticle from '../../components/WorkArticle';
import Photo from '../../components/Photo';

export default () => (
  <WorkArticle
    title="/thread">
    <p><a href="https://slashthread.space">Check it out</a></p>
    <p>I'm always seeing good threads on Twitter, like 20 tweet long monologues about the latest scandal. Like anything on Twitter, they're there on second and gone the next. I think many of these threads are worth keeping around, so I keep them here.</p>

    <p>It's built with React and deployed with <a href="https://zeit.co/now">Now</a>. The code for <a href="https://github.com/jackwreid/slashthread-api">the API</a> and <a href="https://github.com/jackwreid/slashthread">the app</a> are available on GitHub.</p>
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/work/slashthread/full-page.png" />
  </WorkArticle>
);

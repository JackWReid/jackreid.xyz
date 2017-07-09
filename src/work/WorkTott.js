import React from 'react';

import WorkArticle from '../../components/WorkArticle';
import Photo from '../../components/Photo';

export default () => (
  <WorkArticle
    title="Tott">
    <p><a href="https://tott.now.sh">Check it out</a></p>
    <p>Me and my girlfriend were moving in together, and we started to figure out how to split the bills. Because I work in tech, and she works in public service, and the world is screwed up that way, I earn more than her. So, we wanted to split the bills based on how much we earn.</p>
    <p>That's where Tott comes in. Tott allows you to add as many contributors as you want, and how much they earn. We're not working out any tax bands for you or anything, so it's best to just add your annual net. Then add your payments, and beneath it Tott will give you a table telling each person how much to pay.</p>
    <p>If you bookmark the page, it'll save Tott with all your info filled in (it's all encoded in the address bar, nothing fancy). If you go to print out the page it'll leave out all the cruft and product a nice clean table of payments.</p>
    <p>It's built with React and deployed with <a href="https://zeit.co/now">Now</a>. The code's <a href="https://github.com/jackwreid/tott">available on GitHub</a>.</p>
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/work/tott/full-page.png" />
  </WorkArticle>
);

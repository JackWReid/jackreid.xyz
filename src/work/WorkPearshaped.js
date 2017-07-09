import React from 'react';

import WorkArticle from '../../components/WorkArticle';
import Photo from '../../components/Photo';

export default () => (
  <WorkArticle
    title="PearShaped Exeter">
    <p><a href="http://pearshapedexeter.com">Check it out</a></p>
    <p>When I was at the University of Exeter, me and a group of friends founded a music magazine, to get students going to gigs in the city, and to get them writing about music.</p>
    <p>It consumed a lot of my time during my degree, but it really took off. Now it has an elected committee of students running it every year, and dozens of staff writers. It was built with Wordpress. I’m not that proud of the code, or the design, but it did the thing and the thing is good.</p>
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/work/pearshaped/homepage.png" />
  </WorkArticle>
);

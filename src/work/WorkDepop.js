import React from 'react';

import WorkArticle from '../../components/WorkArticle';
import Photo from '../../components/Photo';

export default () => (
  <WorkArticle
    title="Depop">
    <p><a href="https://www.depop.com">Check it out</a></p>
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/work/depop/homepage.png" />
    <p>I worked at Depop in Shoreditch for almost a year. Depop is a social commerce platform with big links to the streetwear community.</p>
    <p>I joined as a Software Developer™. What that really means is I worked on a few internal tools built with React, but mostly on the new <a href="https://www.depop.com">depop.com</a>. We laid down a solid foundation with GraphQL and React and turned the marketing website into a fully fledged web app.</p>
    <p>I also started <a href="https://medium.com/making-depop">Making Depop</a>, a Medium to share our ideas with the wider community and to get conversations started. I also took all the photos and did a few of the interviews for <a href="https://medium.com/making-depop/tagged/humans-of-depop">Humans of Depop</a>: a series on our team. I organized and co-hosted the all company meeting for a spell, too.</p>
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/work/depop/making-depop.png" />
  </WorkArticle>
);

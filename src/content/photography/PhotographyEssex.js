import React from 'react';

import PhotographyArticle from '../../components/PhotographyArticle';
import Photo from '../../components/Photo';

export default () => (
  <PhotographyArticle
    title="Essex"
    date="Winter 2016">
    <p>Essex gets a lot of flak in the UK (usually from me), but having lived here for a little bit now, I've found some pretty nice parts in my little corner.</p>
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/photography/bits-of-essex/autumn.jpg" caption="Billericay, Essex" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/photography/bits-of-essex/cherry-blossom.jpg" caption="Billericay, Essex" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/photography/bits-of-essex/curtain.jpg" caption="Billericay, Essex" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/photography/bits-of-essex/lamp.jpg" caption="Billericay, Essex" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/photography/bits-of-essex/refract.jpg" caption="Billericay, Essex" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/photography/bits-of-essex/steps.jpg" caption="Billericay, Essex" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/photography/bits-of-essex/wheat.jpg" caption="Billericay, Essex" />
  </PhotographyArticle>
);

import React from 'react';

import PhotographyArticle from '../../components/PhotographyArticle';
import Photo from '../../components/Photo';

export default () => (
  <PhotographyArticle
    title="Yosemite"
    date="27th February 2016">
    <p>National Parks might be the best idea the United States has ever had. Some super old, super dead white guys managed to convince President Lincoln (who probably thought he had way more pressing matters at hand) to sign the Yosemite Grant in 1864. Since then the scope of preservation, not just of Yosemite but of the model for all National Parks, has expanded massively. Now there’s these incredible swathes of land, total wilderness really, guarded by the big, scary federal government — so don’t drop your goddamn Starbucks on the ground. I like it.</p>
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/yosemite/valley-wide.jpg" caption="Yosemite" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/yosemite/falls-distant.jpg" caption="Yosemite" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/yosemite/forest.jpg" caption="Yosemite" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/yosemite/falls-forest.jpg" caption="Yosemite" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/yosemite/falls-bw.jpg" caption="Yosemite" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/yosemite/rock-relief.jpg" caption="Yosemite" />
    <Photo url="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/yosemite/half-dome-forest.jpg" caption="Yosemite" />
    </PhotographyArticle>
);

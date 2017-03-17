import React from 'react';
import { Route } from 'react-router-dom';

import PhotographyWomensMarch from './PhotographyWomensMarch';
import PhotographyEssex from './PhotographyEssex';
import PhotographyCommuteEast from './PhotographyCommuteEast';

export default () => (
  <div>
    <Route path="/photography/womens-march" component={PhotographyWomensMarch} />
    <Route path="/photography/essex" component={PhotographyEssex} />
    <Route path="/photography/commute-east" component={PhotographyCommuteEast} />
  </div>
);

import React from 'react';
import { Route } from 'react-router-dom';

import WorkBuzzfeed from './WorkBuzzfeed';
import WorkTott from './WorkTott';
import WorkSlashthread from './WorkSlashthread';
import WorkBuukks from './WorkBuukks';
import WorkDepop from './WorkDepop';
import WorkPearshaped from './WorkPearshaped';

export default () => (
  <div>
    <Route path="/work/buzzfeed" component={WorkBuzzfeed} />
    <Route path="/work/tott" component={WorkTott} />
    <Route path="/work/slashthread" component={WorkSlashthread} />
    <Route path="/work/buukks" component={WorkBuukks} />
    <Route path="/work/depop" component={WorkDepop} />
    <Route path="/work/pearshaped" component={WorkPearshaped} />
  </div>
);

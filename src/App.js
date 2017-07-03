import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Writing from './pages/Writing';
import Trip from './pages/Trip';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/work" component={Work} /> */}
      {/* <Route path="/photography" component={Photography} /> */}
      <Route path="/writing/:slug" component={Writing} />
      <Route path="/trip/:slug" component={Trip} />
    </Switch>
  </Router>
);

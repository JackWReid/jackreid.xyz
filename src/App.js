import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from './pages/Home';
import Writing from './pages/Writing';
import PhotoPost from './pages/PhotoPost';

export default () => (
  <div>
    <Helmet defaultTitle="jack reid" titleTemplate="%s | jack reid" />
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/writing/:slug" component={Writing} />
        <Route path="/photo/:slug" component={PhotoPost} />
      </Switch>
    </Router>
  </div>
);

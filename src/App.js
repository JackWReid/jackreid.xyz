import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import { css } from 'glamor';

import SiteHeader from './components/SiteHeader';

import Intro from './sections/Intro';
import Nav from './sections/Nav';
import HomeFinal from './sections/HomeFinal';

import Work from './content/work';
import Trips from './content/trips';
import Photography from './content/photography';
import Writing from './content/writing';
import NotFound from './content/NotFound';

const siteLayout = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const panelsLayout = {
  width: '100%',
  flex: 1,
  display: 'flex',
  alignItems: 'stretch',
  '@media(max-width: 700px)': {
    display: 'block',
  },
}

const columnBase = {
  flex: 2,
  maxHeight: '100%',
  overflowY: 'scroll',
  padding: 16,
};

class App extends Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate="%s | Jack Reid" defaultTitle="Jack Reid" />
        <Router>
          <div {...css(siteLayout)}>
            <SiteHeader />
            <div {...css(panelsLayout)}>
              <div {...css(columnBase)}><Intro /></div>
              <div {...css(columnBase)}><Nav /></div>
              <div {...css({...columnBase, flex: 3})}>
                <Switch>
                  <Route exact path="/" component={HomeFinal}/>
                  <Route path="/work" component={Work} />
                  <Route path="/trip" component={Trips} />
                  <Route path="/photography" component={Photography} />
                  <Route path="/writing" component={Writing} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

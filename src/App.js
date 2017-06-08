import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { randomGoodEmoji } from './utils';

import SiteHeader from './components/SiteHeader';
import ScrollToTopOnNav from './ScrollToTopOnNav';

import Intro from './sections/Intro';
import Nav from './sections/Nav';
import HomeFinal from './sections/HomeFinal';

import Work from './content/work';
import Trips from './content/trips';
import Photography from './content/photography';
import Writing from './content/writing';
import NotFound from './content/NotFound';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: stretch;
  @media(max-width: 700px) {
    display: block;
  }
`;

const Column = styled.div`
  flex: 2;
  max-height: 100%;
  overflow-y: scroll;
  padding: 16px;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Helmet titleTemplate={`%s | Jack Reid ${randomGoodEmoji()}`} defaultTitle="Jack Reid" />
        <Router>
          <Layout>
            <SiteHeader />
            <Row>
              <Column><Intro /></Column>
              <Column><Nav /></Column>
              <Column style={{flex: 3}}>
                <ScrollToTopOnNav />
                <Switch>
                  <Route exact path="/" component={HomeFinal}/>
                  <Route path="/work" component={Work} />
                  <Route path="/trip" component={Trips} />
                  <Route path="/photography" component={Photography} />
                  <Route path="/writing/:slug" component={Writing} />
                  <Route component={NotFound} />
                </Switch>
              </Column>
            </Row>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;

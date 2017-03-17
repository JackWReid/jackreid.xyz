import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

const ScrollToTopOnNav = () => (
  <Route component={ScrollToTop}/>
);

export default ScrollToTopOnNav;

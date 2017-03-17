import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'glamor';

const headerReset = {
  margin: 0,
  fontWeight: 'normal',
  fontSize: 16,
};

export default () => (
  <div {...css({
    width: '100%',
    padding: 16,
    textTransform: 'lowercase',
  })}>
    <h1 {...css(headerReset)}>
      <Link to="/" {...css({color: 'white', backgroundColor: 'pink', textDecoration: 'none'})}>Jack Reid</Link>
    </h1>
    <h2 {...css(headerReset)}>Web Idiot</h2>
  </div>
);

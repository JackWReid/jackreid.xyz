import React from 'react';
import Helmet from 'react-helmet';
import { css } from 'glamor';

const articleStyle = {
  '& h1, & h2': {
    maxWidth: '30rem',
    fontSize: 16,
    fontWeight: 'normal',
  },
  '& h1': {
    marginTop: 0,
    textDecoration: 'underline',
  },
  '& p': {
    maxWidth: '40em',
  },
};

export default ({title, subtitle, slug, date, children}) => (
  <div {...css(articleStyle)}>
    <Helmet title={title} />
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <time>{date}</time>
    {children}
  </div>
);

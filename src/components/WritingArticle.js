import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 0;
  max-width: 30rem;
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
`;

const Subtitle = styled.h1`
  max-width: 30rem;
  font-size: 16px;
  font-weight: normal;
`;

const Content = styled.div`
  max-width: 40em;
`;

export default ({title, subtitle, slug, date, children}) => (
  <div>
    <Helmet title={title} />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <time>{date}</time>
    <Content>
      {children}
    </Content>
  </div>
);

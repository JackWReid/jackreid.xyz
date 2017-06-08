import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import marked from 'marked';

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

export default ({post: { title, subtitle, postDate, body }}) => (
  <div>
    <Helmet title={title} />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <time>{postDate}</time>
    <Content>
      <div dangerouslySetInnerHTML={{__html: marked(body)}}></div>
    </Content>
  </div>
);

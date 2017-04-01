import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  padding: 16px;
  text-transform: lowercase;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
  & a {
    color: white;
    background-color: pink;
    text-decoration: none;
  }
`;

const Subtitle = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 16px;
`;

export default () => (
  <Header>
    <Title>
      <Link to="/">Jack Reid</Link>
    </Title>
    <Subtitle>Web Idiot</Subtitle>
  </Header>
);

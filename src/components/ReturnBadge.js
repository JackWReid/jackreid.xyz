import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BadgeLink = styled(Link)`
  width: 50px;
  display: block;
  margin: 50px auto;
`;

export default () => (
  <BadgeLink to="/">
    <img alt="Home" src="/favicon.png" />
  </BadgeLink>
);

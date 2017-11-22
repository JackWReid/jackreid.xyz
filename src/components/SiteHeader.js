import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Spacer from './Spacer';

const BroadContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const NarrowContainer = styled(Link)`
  max-width: 20rem;
  margin: 0 auto;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const Sunset = styled.div`
  display: block;
  height: ${props => props.size || 5}rem;
  width: ${props => props.size || 5}rem;
  background: linear-gradient(pink, hsl(180, 30%, 95%));
  border-radius: 50%;
`;

const Title = styled.h1`
  text-transform: lowercase;
  font-size: 1.5rem;
  font-family: Inconsolata, monospace;
`;

export default ({ size = 'full', subtitle, ...props }) => {
  if (size === 'full') {
    return (
      <BroadContainer to="/" {...props}>
        <Sunset />
        <Title>Jack Reid</Title>
      </BroadContainer>
    );
  }

  if (size == 'compact') {
    return (
      <NarrowContainer to="/">
        <Sunset size="2" />
        <Spacer size="1" />
        <Title>Jack Reid</Title>
      </NarrowContainer>
    );
  }
};

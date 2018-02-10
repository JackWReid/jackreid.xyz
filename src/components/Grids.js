import React from 'react';
import styled from 'styled-components';

export const PostGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 16rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 8rem;
  }
`;

export const TopTrio = styled.div`
  margin: 4rem 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 16rem;
  grid-template-areas: 'intro reading reading';
  grid-gap: 1rem;

  @media screen and (max-width: 600px) {
    display: block;

    & > * {
      margin-bottom: 1rem;
    }
  }
`;

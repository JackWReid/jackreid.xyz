import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import darkWaves from '../images/dark-waves.jpg';
import marble from '../images/marble.jpg';

const Block = styled(Link)`
  height: 100%;
  width: 100%;
  display: block;
  text-decoration: none;
  color: inherit;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  overflow: hidden;
`;

const ExternalBlock = styled.a`
  height: 100%;
  width: 100%;
  display: block;
  text-decoration: none;
  color: inherit;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  overflow: hidden;
`;

const ArtBlock = styled(ExternalBlock)`
  display: block;
  min-height: 10rem;
  background-color: ${props => props.color};
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

const AlbumBlock = styled(Block)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1rem;
  background-color: pink;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  h1 {
    display: inline-block;
    margin: 0;
    padding: 5px;
    font-size: 1rem;
    background: pink;
  }
`;

const NewsBlock = styled(ExternalBlock)`
  padding: 1rem;
  font-size: 2rem;
  text-align: right;
  background: linear-gradient(pink, teal), url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-blend-mode: screen;

  h1 {
    margin: 0;
    font-family: Inconsolata, monospace;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
    text-transform: uppercase;
  }

  p {
    max-width: 20rem;
    font-size: 1rem;
    font-family: Inconsolata, monospace;
  }

  span {
    background-color: pink;
  }
`;

const IntroBlock = styled.div`
  grid-area: intro;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: linear-gradient(pink, pink),
    url(${darkWaves});
  background-position: center;
  background-size: cover;
  background-blend-mode: screen;
  border: 0.3rem solid pink;
`;

const MarbleBlock = styled(Block)`
  display: block;
  padding: 1rem;
  background: linear-gradient(pink, pink),
    url(${marble});
  background-size: cover;
  background-blend-mode: screen;
  border: 0.3rem solid pink;

  h1 {
    margin-top: 0;
    font-size: 1.2rem;
  }
`;

export { ArtBlock, NewsBlock, AlbumBlock, IntroBlock, MarbleBlock };

import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

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
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;

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
    url('https://i.pinimg.com/564x/d6/a5/8d/d6a58d881f03d3e80fb0f9c7428163e3.jpg');
  background-position: center;
  background-size: cover;
  background-blend-mode: screen;
  border: 0.3rem solid pink;
`;

const MarbleBlock = styled(Block)`
  display: block;
  padding: 1rem;
  background: linear-gradient(pink, pink),
    url('https://i.pinimg.com/736x/92/ec/36/92ec361ce06fa46457258cd7068035cf--pattern-texture-pattern-print.jpg');
  background-size: cover;
  background-blend-mode: screen;
  border: 0.3rem solid pink;

  h1 {
    margin-top: 0;
    font-size: 1.2rem;
  }
`;

export { ArtBlock, NewsBlock, AlbumBlock, IntroBlock, MarbleBlock };

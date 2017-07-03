import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.ul`
  height: 100%;
  grid-area: gallery;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 4rem;
  grid-auto-flow: row;
  grid-gap: 1rem;
  margin: 0;
  padding: 0 1rem;
  list-style: none;

  @media (min-width: 600px) {
    grid-auto-rows: 1fr;
    padding: 1rem 1rem 0 0;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const GalleryItem = styled.li`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;

  h1 {
    margin: 0;
    display: inline;
    font-size: 1rem;
    font-weight: normal;
    text-transform: lowercase;
    background-color: pink;
  }
`;

const CentreLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({items}) => (
  <Grid>
    {items.map((item, key) => (
      <GalleryItem key={key} image={item.photo}>
        <CentreLink to={`/photo/${item.slug}`}>
          <h1>{item.title}</h1>
        </CentreLink>
      </GalleryItem>
    ))}
  </Grid>
);

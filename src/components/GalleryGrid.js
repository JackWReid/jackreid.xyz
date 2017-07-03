import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 9rem;
  grid-auto-flow: row;
  grid-gap: 1rem;
  margin: 0;
  padding: 1rem;
  list-style: none;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
        <CentreLink to={`/trip/${item.slug}`}>
          <h1>{item.title}</h1>
        </CentreLink>
      </GalleryItem>
    ))}
  </Grid>
);

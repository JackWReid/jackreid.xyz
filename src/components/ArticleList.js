import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArticleList = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  margin: 0;
  padding: 0 1rem;
  list-style: none;

  @media (min-width: 800px) {
    grid-auto-rows: 4rem;
  }
`;

const Article = styled.li`
  display: block;

  h1 {
    margin: 0;
    font-weight: normal;
    text-transform: lowercase;
  }

  h1 a {
    background-color: pink;
  }

  p {
    margin: 0;
  }
`;

export default ({items}) => (
  <ArticleList>
    {items.map((item, key) => (
      <Article key={key}>
        <h1><Link to={`/writing/${item.slug}`}>{item.title}</Link></h1>
        <p>{item.subtitle}</p>
      </Article>
    ))}
  </ArticleList>
);

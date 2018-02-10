import React from 'react';
import styled from 'styled-components';

import { PostGrid } from '../../components/Grids';
import { MarbleBlock } from '../../components/Blocks';

const Grid = PostGrid.extend`
  margin: 0 auto;
  max-width: 1000px;
`;

const SectionTitle = styled.h1`
  margin: 4rem 0 2rem;
  text-align: center;
  text-transform: lowercase;
  text-decoration: underline;
  text-decoration-color: pink;
  font-family: Inconsolata, monospace;
`;

export default ({ data: { allMarkdownRemark: { edges } } }) => {
  const posts = edges
    .filter(({ node }) => node.frontmatter.type === 'writing')
    .map(({ node }) => node);
  return (
    <div>
      <SectionTitle>Writing</SectionTitle>
      <Grid>
        {posts.map((post, key) => (
          <MarbleBlock key={key} to={post.frontmatter.path}>
            <h1>{post.frontmatter.title}</h1>
            <small>{new Date(post.frontmatter.date).toDateString()}</small>
            <p>{post.excerpt}</p>
          </MarbleBlock>
        ))}
      </Grid>
    </div>
  );
};

export const pageQuery = graphql`
  query WritingQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            path
            date
            title
            type
          }
        }
      }
    }
  }
`;

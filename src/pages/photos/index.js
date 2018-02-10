import React from 'react';
import styled from 'styled-components';

import { PostGrid } from '../../components/Grids';
import { AlbumBlock } from '../../components/Blocks';

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
    .filter(({ node }) => node.frontmatter.type === 'photos')
    .map(({ node }) => node);
  return (
    <div>
      <SectionTitle>Photos</SectionTitle>
      <Grid>
        {posts.map((post, key) => (
          <AlbumBlock
            key={key}
            to={post.frontmatter.path}
            image={post.frontmatter.poster}
          >
            <h1>{post.frontmatter.title}</h1>
          </AlbumBlock>
        ))}
      </Grid>
    </div>
  );
};

export const pageQuery = graphql`
  query PhotosQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            poster
          }
        }
      }
    }
  }
`;

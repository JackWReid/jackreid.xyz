import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { TopTrio } from '../components/Grids';
import { IntroBlock } from '../components/Blocks';
import { CurrentlyReading } from '../components/CurrentlyReading';
import HomeGrid from '../components/HomeGrid';

const Page = styled.div`
  @media screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const BinaryGrid = styled.div`
  margin: 1rem 0 5rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 8rem;
`;

const SectionLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  color: inherit;
  background-color: pink;
`;

export default ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <Page>
      <Helmet title={siteTitle} />
      <TopTrio>
        <IntroBlock>
          <p>
            I make stuff on the internet. I read books. I take photos. I write
            things. The things I write aren’t very good, but I did English at
            uni so I have to do it anyway.
          </p>
          <p>I work at BuzzFeed.</p>
        </IntroBlock>
        <CurrentlyReading />
      </TopTrio>
      <HomeGrid />
      <BinaryGrid>
        <SectionLink to="/photos">All Photos</SectionLink>
        <SectionLink to="/writing">All Writing</SectionLink>
      </BinaryGrid>
    </Page>
  );
};

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

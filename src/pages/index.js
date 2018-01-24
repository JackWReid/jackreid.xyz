import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import { TopTrio } from '../components/Grids';
import { IntroBlock } from '../components/Blocks';
import { CurrentlyReading } from '../components/CurrentlyReading';
import HomeGrid from '../components/HomeGrid';

export default ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title');

  return (
    <div>
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
    </div>
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

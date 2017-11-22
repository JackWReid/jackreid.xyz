import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import {
  IntroBlock,
  MarbleBlock,
  NewsBlock,
  AlbumBlock,
  ArtBlock
} from '../components/Blocks';

const PostGrid = styled.div`
  margin: 0 0 10rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(10, 16rem);

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

const TopTrio = styled.div`
  margin: 4rem 0 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 16rem;
  grid-template-areas: '. intro .';
  grid-gap: 1rem;

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export default ({ data }) => {
  const siteTitle = get(data, 'site.siteMetadata.title');
  const posts = get(data, 'allMarkdownRemark.edges');

  return (
    <div>
      <Helmet title={get(data, 'site.siteMetadata.title')} />
      <TopTrio>
        <IntroBlock>
          <p>
            I make stuff on the internet. I read books. I take photos. I write
            things. The things I write aren’t very good, but I did English at
            uni so I have to do it anyway.
          </p>
          <p>I work at BuzzFeed.</p>
        </IntroBlock>
      </TopTrio>

      <PostGrid>
        <MarbleBlock
          gridColumn="1 / 2"
          gridRow="1 / 2"
          to="/writing/neckbeard/"
        >
          <h1>Neckbeard</h1>
          <small>
            3<sup>rd</sup> July 2017
          </small>
          <p>
            Neckbeard. The epithet connotes a number of things about a person:
            that they are socially inept, immature, that they have particularly
            uncool hobbies and interests.
          </p>
        </MarbleBlock>
        <ArtBlock
          title="100 Years of Solitude"
          gridColumn="1 / 2"
          gridRow="2 / 3"
          color="teal"
          href="https://www.lrb.co.uk/v39/n12/fredric-jameson/no-magic-no-metaphor"
          image="https://lovelace-media.imgix.net/uploads/1169/66056c10-f8fb-0133-f1a8-0aacbc4f5d01.jpg?w=740&h=1098&fit=crop&crop=faces&auto=format&q=70"
        />
        <NewsBlock
          gridColumn="2 / 4"
          gridRow="1 / 3"
          href="https://www.theatlantic.com/magazine/archive/1994/07/he-was-a-crook/308699/"
          image="https://cdn.theatlantic.com/assets/media/img/2016/04/AP_999051130542/lead_960.jpg?1461952164"
        >
          <h1>He Was a Crook</h1>
          <h2>Hunter S. Thompson, 1994</h2>
          <p>
            <span>
              “If the right people had been in charge of Nixon's funeral, his
              casket would have been launched into one of those open-sewage
              canals that empty into the ocean just south of Los Angeles.”
            </span>
          </p>
        </NewsBlock>
        <MarbleBlock gridRow="3 / 4" to="/writing/fat-internet/">
          <h1>@fat: the internet historian</h1>
          <small>
            28<sup>th</sup> August 2015
          </small>
          <p>
            @fat’s tone is irreverent, self-aware, acerbic, and ironic. It’s
            just perfect for the historian of our times.
          </p>
        </MarbleBlock>
        <NewsBlock
          gridColumn="1 / 3"
          gridRow="3 / 4"
          href="https://www.theatlantic.com/magazine/archive/2014/06/the-case-for-reparations/361631/"
          image="https://cdn.theatlantic.com/assets/media/img/2015/08/26/reparations_2/1920.jpg?1440631946"
        >
          <h1>The Case for Reparations</h1>
          <h2>Ta-Nehisi Coates, 2014</h2>
        </NewsBlock>
        <AlbumBlock
          to="/photos/san-francisco"
          image="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/san-francisco/dusk-bay.jpg"
        >
          <h1>San Francisco</h1>
        </AlbumBlock>
        <AlbumBlock
          gridColumn="2 / 4"
          to="/photos/chicago"
          image="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/chicago/aerial-burbs.jpg"
        >
          <h1>Chicago</h1>
        </AlbumBlock>
        <ArtBlock
          title="Theodore Adorno, The Culture Industry"
          color="seagreen"
          gridColumn="1 / 3"
          gridRow="5 / 7"
          href="https://www.marxists.org/reference/archive/adorno/1944/culture-industry.htm"
          image="https://i1.wp.com/thecharnelhouse.org/wp-content/uploads/2013/10/0895-theodor-adorno.jpg"
        />
        <MarbleBlock to="/writing/siri/">
          <h1>Siri, Make Me A Sandwich</h1>
          <small>
            23<sup>rd</sup> April 2015
          </small>
          <p>
            Evolving representations of womens’ bodies in film, video-games, and
            digital assistants.
          </p>
        </MarbleBlock>
        <MarbleBlock to="/writing/rhizome/">
          <h1>Is The Internet A Rhizome?</h1>
          <small>
            2<sup>nd</sup> March 2015
          </small>
          <p>
            How the language baked into the foundation of computing shapes the
            internet
          </p>
        </MarbleBlock>
        <AlbumBlock
          to="/photos/womens-march"
          image="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/photography/womens-march-17/police-smoke.jpg"
        >
          <h1>The Womens' March</h1>
        </AlbumBlock>
        <NewsBlock
          gridColumn="2 / 4"
          href="http://www.jon.gold/2016/06/declarative-design-tools/"
          image="https://i.imgur.com/KwsWMGW.jpg"
        >
          <h1>Declarative Design Tools</h1>
          <h2>Jon Gold, 2016</h2>
        </NewsBlock>
        <NewsBlock
          gridColumn="1 / 3"
          gridRow="8 / 10"
          href="https://www.law.uchicago.edu/news/sunstein-internet-and-political-polarization"
          image="https://i.imgur.com/uSzcZLt.jpg"
        >
          <h1>On The Internet and Political Polarization</h1>
          <h2>Cass R. Sunstein, 2007 </h2>
          <p>
            <span>
              A key consequence of this kind of self-sorting is what we might
              call enclave extremism. When people end up in enclaves of
              like-minded people, they usually move toward a more extreme point
              in the direction to which the group's members were originally
              inclined.
            </span>
          </p>
        </NewsBlock>
        <ArtBlock
          title="Pure UI, Guillermo Rauch"
          color="pink"
          href="https://rauchg.com/2015/pure-ui"
          image="https://pbs.twimg.com/profile_images/871555682608136205/yMs8Gnot_400x400.jpg"
        />
        <MarbleBlock to="/writing/news-addict/">
          <h1>Confessions of a News Addict</h1>
          <small>
            24<sup>th</sup> November 2014
          </small>
          <p>In the earliest seconds of my waking day, I reach for the news.</p>
        </MarbleBlock>
        <AlbumBlock
          to="/photos/los-angeles"
          image="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/los-angeles/hot-skyline.jpg"
        >
          <h1>Los Angeles</h1>
        </AlbumBlock>
        <AlbumBlock
          to="/photos/edinburgh"
          image="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/edinburgh/leigh.jpg"
        >
          <h1>Edinburgh</h1>
        </AlbumBlock>
        <AlbumBlock
          to="/photos/budapest"
          image="https://s3.eu-west-2.amazonaws.com/jackwreid/jackwreid/trips/budapest/boat.jpg"
        >
          <h1>Budapest</h1>
        </AlbumBlock>
      </PostGrid>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

import React, { Component } from 'react';
import styled from 'styled-components';

import PageHeader from '../components/PageHeader';
import GalleryGrid from '../components/GalleryGrid';
import ArticleList from '../components/ArticleList';

import { getWritingPosts, getPhotoPosts, getRandomPhoto } from '../service';

const HomePage = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  align-items: stretch;
  grid-template-areas:
    'header'
    'gallery'
    'articles'
    'blurb'
    'footer';

  @media (min-width: 600px) {
    grid-auto-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'header gallery'
      'articles articles'
      'blurb blurb'
      'footer footer';
  }

  @media (min-width: 800px) {
    grid-template-areas:
      'header gallery'
      'articles blurb'
      'footer footer';
  }
`;

const Blurb = styled.div`
  grid-area: blurb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  background-color: pink;

  p {
    max-width: 20em;
  }

  @media (min-width: 800px) {
    margin: 0 1rem 0 0;
  }
`;

const Footer = styled.ul`
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1rem;
  padding: 0 1rem;
  list-style: none;

  a {
    background-color: white;
  }
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripPosts: null,
      writingPosts: null,
    };
  }

  async componentDidMount() {
    const photoPosts = await getPhotoPosts();
    const writingPosts = await getWritingPosts();
    const headerPhoto = await getRandomPhoto();
    this.setState({
      photoPosts,
      writingPosts,
      headerPhoto,
    });
  }

  render() {
    const { photoPosts, writingPosts, headerPhoto } = this.state;

    if (!photoPosts || !writingPosts) {
      return null;
    }

    return (
      <HomePage>
        <PageHeader photo={headerPhoto} />
        <GalleryGrid items={photoPosts} />
        <ArticleList items={writingPosts} />
        <Blurb>
          <p>I make stuff on the internet. I read books. I take photos. I write things. The things I write aren’t very good, but I did English at uni so I have to do it anyway.</p>
        </Blurb>
        <Footer>
          <a href="mailto:emailjackreid@gmail.com">emailjackreid@gmail.com</a>
          <a href="https://twitter.com/jackreid">@jackreid</a>
        </Footer>
      </HomePage>
    );
  }
}

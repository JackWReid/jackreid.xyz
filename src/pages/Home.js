import React, { Component } from 'react';

import PageHeader from '../components/PageHeader';
import GalleryGrid from '../components/GalleryGrid';
import ArticleList from '../components/ArticleList';

import { getWritingPosts, getTripPosts, getRandomPhoto } from '../service';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripPosts: null,
      writingPosts: null,
    };
  }

  async componentDidMount() {
    const tripPosts = await getTripPosts();
    const writingPosts = await getWritingPosts();
    const headerPhoto = await getRandomPhoto();
    this.setState({
      tripPosts,
      writingPosts,
      headerPhoto,
    });
  }

  render() {
    const { tripPosts, writingPosts, headerPhoto } = this.state;

    if (!tripPosts || !writingPosts) {
      return null;
    }

    return (
      <div>
        <PageHeader photo={headerPhoto} />
        <GalleryGrid items={tripPosts} />
        <ArticleList items={writingPosts} />
      </div>
    );
  }
}

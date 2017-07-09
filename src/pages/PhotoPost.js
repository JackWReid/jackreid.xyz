import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import ScrollToTopOnNav from '../components/ScrollToTopOnNav';
import { getPhotoPost } from '../service';

import Image from '../components/Image';

const Title = styled.h1`
  margin-top: 0;
  max-width: 30rem;
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
`;

const Content = styled.div`
  max-width: 30em;
  margin: 5em auto 0;
  padding: 0 1rem;
`;

const PhotoList = styled.div`
  max-width: 90vw;
  margin: 5em auto 0;

  & > div {
    margin: 0 auto 5em;
  }
`;

export default class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  async componentDidMount() {
    const post = await getPhotoPost(this.props.match.params.slug);
    this.setState({post});
  }

  render() {
    if (!this.state.post) {
      return null;
    }

    const { title, postDate, body, photos } = this.state.post;

    return (
      <div>
        <ScrollToTopOnNav />
        <Content>
          <Helmet title={title} />
          <Title>{title}</Title>
          <time>{postDate}</time>
          {body}
        </Content>

        <PhotoList>
          {photos.map((photo, key) => (
            <Image alt={title} key={key} src={photo} />
          ))}
        </PhotoList>
      </div>
    );
  }
}

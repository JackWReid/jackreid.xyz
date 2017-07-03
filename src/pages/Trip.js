import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { getTripPost } from '../service';

const Title = styled.h1`
  margin-top: 0;
  max-width: 30rem;
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
`;

const Content = styled.div`
  max-width: 40em;
`;

export default class Writing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  async componentDidMount() {
    const post = await getTripPost(this.props.match.params.slug);
    this.setState({post});
  }

  render() {
    if (!this.state.post) {
      return null;
    }

    const { title, postDate, body, photos } = this.state.post;

    return (
      <div>
        <Helmet title={title} />
        <Title>{title}</Title>
        <time>{postDate}</time>
        <Content>
          {body}
          {photos.map((photo, key) => (
            <img alt={title} key={key} src={photo} />
          ))}
        </Content>
      </div>
    );
  }
}

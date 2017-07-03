import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import marked from 'marked';

import { getWritingPost } from '../service';

const Article = styled.article`
  max-width: 30em;
  margin: 5em auto;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: normal;
  text-decoration: underline;
`;

const Subtitle = styled.h1`
  max-width: 30rem;
  font-size: 16px;
  font-weight: normal;
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
    const post = await getWritingPost(this.props.match.params.slug);
    this.setState({post});
  }

  render() {
    if (!this.state.post) {
      return null;
    }

    const { title, subtitle, postDate, body } = this.state.post;

    return (
      <Article>
        <Helmet title={title} />
        <Link to="/">back</Link>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <time>{postDate}</time>
        <Content>
          <div dangerouslySetInnerHTML={{__html: marked(body)}}></div>
        </Content>
      </Article>
    );
  }
}

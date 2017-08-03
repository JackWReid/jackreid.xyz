import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { format } from 'date-fns';
import styled from 'styled-components';
import marked from 'marked';

import ScrollToTopOnNav from '../components/ScrollToTopOnNav';
import ReturnBadge from '../components/ReturnBadge';
import PostCardTags from '../components/PostCardTags'
import { getWritingPost } from '../service';

const Article = styled.article`
  max-width: 30em;
  margin: 0 auto 5em;
  padding: 0 1em;
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
        <ScrollToTopOnNav />
        <ReturnBadge />
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <PostCardTags post={this.state.post} />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <time>{format(postDate, 'Do MMMM YYYY')}</time>
        <Content>
          <div dangerouslySetInnerHTML={{__html: marked(body)}}></div>
        </Content>
      </Article>
    );
  }
}

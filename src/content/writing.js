import React, { Component } from 'react';
import WritingArticle from '../components/WritingArticle';
import { getPostBySlug } from './service';

export default class Writing extends Component {
  constructor() {
    super();
    this.state = {
      post: null,
    };
  }

  async getPost(slug) {
    const post = await getPostBySlug(slug);
    this.setState({post});
  }

  componentDidMount() {
    this.getPost(this.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    this.getPost(nextProps.match.params.slug);
  }

  render() {
    const { post } = this.state;

    if (!post)
      return null;

    return (
      <WritingArticle post={post}/>
    );
  }
}

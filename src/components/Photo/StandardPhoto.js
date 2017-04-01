import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  margin: 16px auto;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity .5s .5s ease-in-out;
`;

export default class StandardPhoto extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  onLoad = () => this.setState({loaded: true});

  render() {
    const { loaded } = this.state;
    const { url, openLightbox } = this.props;

    return (
      <Image
        src={url}
        onClick={openLightbox}
        onLoad={this.onLoad}
        loaded={loaded} />
    );
  }
}

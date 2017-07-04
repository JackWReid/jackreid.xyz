import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  position: relative;
  z-index: 0;
`;

const Blinder = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: pink;
  z-index: 1;
  transition: opacity .5s ease-in-out;
  opacity: ${props => props.status === 'finished' ? '0' : '1'}
`;

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
    };
  }

  onLoad = () => this.setState({status: 'finished'});
  onError = () => this.setState({status: 'error'});

  render() {
    const { src, alt, className } = this.props;
    const { status } = this.state;

    return (
      <Container className={className}>
        <Img
          src={src}
          alt={alt}
          onLoad={this.onLoad}
          onError={this.onError}
          status={status}
        />
        <Blinder status={status} />
      </Container>
    );
  }
}

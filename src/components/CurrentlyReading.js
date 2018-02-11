import React, { Component } from 'react';
import styled from 'styled-components';

import { FadeWaveBlock } from './Blocks';

const Block = FadeWaveBlock.extend`
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const LilTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: Inconsolata, monospace;
`;

export class CurrentlyReading extends Component {
  state = {
    readingData: false,
  };

  componentDidMount() {
    fetch('https://api.jackreid.xyz/reading')
    .then(response => response.json())
    .then(readingData => this.setState({ readingData }));
  }

  render() {
    const { readingData } = this.state;

    return (
      <Block loaded={!!readingData}>
        <LilTitle>Currently Reading</LilTitle>
        {readingData && <h2>{readingData.title}</h2>}
        {readingData && <h3>{readingData.author}</h3>}
      </Block>
    );
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';

import { IntroBlock } from './Blocks';

const Block = IntroBlock.extend`
  grid-area: reading;
  opacity: ${props => props.loaded ? 1 : 0};
  transition: opacity 1s ease-in-out;
`;

export class CurrentlyReading extends Component {
  state = {
    readingData: false,
  }

  async componentDidMount() {
    const response = await fetch('https://jackreid-books-api.now.sh/reading');
    const [readingData] = await response.json();
    this.setState({readingData});
  }

  render() {
    const { readingData } = this.state;
    console.log(this.state)

    return (
      <Block loaded={!!readingData}>
        <h1>Currently Reading</h1>
        {readingData && <h2>{readingData.title}</h2>}
        {readingData && <h3>{readingData.author}</h3>}
      </Block>
    );
  }
}
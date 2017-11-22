import React from 'react';
import styled from 'styled-components';

const MessageBox = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto 0;
  padding: 1rem;
  text-align: center;
  font-family: Inconsolata, monospace;
  background-color: pink;
  background-size: cover;
  background-position: center;
  background-image: url('https://media.giphy.com/media/XOftAMJVWBNja/giphy.gif');
  background-blend-mode: screen;
`;

export default () => (
  <MessageBox>
    <h1>404</h1>
  </MessageBox>
);

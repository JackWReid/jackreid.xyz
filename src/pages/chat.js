import React from 'react';
import styled from 'styled-components';

const Chat = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Bubble = styled.li`
  display: block;
  max-width: 20rem;
  padding: 10px;
  border-radius: 10px;
`;

const SentBubble = Bubble.extend`
  color: white;
  background-color: #4390f2;
`;

const ReceivedBubble = Bubble.extend`
  background-color: #eeeeee;
`;

export default () => (
  <Chat>
    <SentBubble>
      Yeah but we’re already done at the salon so a bit early for lunch! I’ll
      let you know, but might have lunch at home.
    </SentBubble>
    <ReceivedBubble>
      Yeah but we’re already done at the salon so a bit early for lunch! I’ll
      let you know, but might have lunch at home.
    </ReceivedBubble>
  </Chat>
);

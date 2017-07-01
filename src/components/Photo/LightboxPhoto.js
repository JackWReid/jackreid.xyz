import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: black;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.img`
  display: block;
  max-width: 70vw;
  cursor: zoom-out;
`;

export default ({url, closeLightbox}) => (
  <Wrapper onClick={closeLightbox}>
    <Image src={url} />
  </Wrapper>
);

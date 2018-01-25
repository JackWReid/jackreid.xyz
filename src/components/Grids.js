import React from 'react';
import styled from 'styled-components';

export const PostGrid = styled.div`
margin: 0 0 10rem;
display: grid;
grid-gap: 1rem;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: repeat(10, 16rem);

@media screen and (max-width: 600px) {
  display: block;
}
`;

export const TopTrio = styled.div`
margin: 4rem 0 1rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 16rem;
grid-template-areas: 'intro reading reading';
grid-gap: 1rem;

@media screen and (max-width: 600px) {
  display: block;
}
`;

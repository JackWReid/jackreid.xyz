import React from 'react';
import styled from 'styled-components';

import SiteHeader from '../components/SiteHeader';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
`;

export default ({ children }) => (
  <Container>
    <SiteHeader size="compact" />
    {children()}
  </Container>
);

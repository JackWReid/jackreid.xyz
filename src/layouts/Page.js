import React from 'react';
import styled from 'styled-components';

import SiteHeader from '../components/SiteHeader';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto 5rem;
  @media (min-width: 600px) {
    padding: 0 1rem;
  }
`;

const Header = styled(SiteHeader)`
  margin-top: 3rem;
`;

export default ({ children }) => (
  <Container>
    <Header />
    {children()}
  </Container>
);

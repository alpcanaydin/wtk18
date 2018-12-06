import React from 'react';
import { Link } from 'react-router-dom';

import styled from '../../theme';
import { Container } from '..';

import wtkLogo from '../../img/wtk-logo.svg';

const Wrapper = styled.header`
  padding: 32px 0;
`;

const Header = () => (
  <Wrapper>
    <Container>
      <Link to="/">
        <img src={wtkLogo} alt="WTK'18" />
      </Link>
    </Container>
  </Wrapper>
);

export default Header;

import React from 'react';
import styled, { keyframes } from '../../theme';

import spinner from '../../img/spinner.svg';

const spin = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.img`
  flex-shrink: 0;
  animation: ${spin} 0.5s infinite linear;
`;

export default () => <Spinner src={spinner} alt="Loading..." />;

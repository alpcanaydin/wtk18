import React, { ReactNode } from 'react';

import styled from '../../theme';

interface Props {
  children: ReactNode;
  onCloseClick: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 320px;
  margin: 32px;
  padding: 32px;
  box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.25);
`;

const Close = styled.button`
  background: transparent;
  border: none;
  font-family: ${props => props.theme.secondaryFontFamily};

  cursor: pointer;
  padding: 0;
  outline: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.8125rem;
  font-weight: 500;
`;

const Options = styled.div`
  margin-top: 32px;
  display: grid;
  grid-row-gap: 32px;
`;

const Pane = ({ children, onCloseClick }: Props) => (
  <Wrapper>
    <Close onClick={onCloseClick}>Kapat</Close>

    <Options>{children}</Options>
  </Wrapper>
);

export default Pane;
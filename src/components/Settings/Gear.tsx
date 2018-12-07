import React from 'react';

import styled from '../../theme';

import gearIcon from '../../img/gear.svg';

const Wrapper = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  outline: none;
`;

interface Props {
  onClick: () => void;
}

const Gear = ({ onClick }: Props) => (
  <Wrapper>
    <Button onClick={onClick}>
      <img src={gearIcon} alt="Ayarlar" width="48" />
    </Button>
  </Wrapper>
);

export default Gear;

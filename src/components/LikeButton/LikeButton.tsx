import React from 'react';

import styled from '../../theme';

import Like from './Like';

const LikeWrapper = styled('button')<{ isLiked: boolean }>`
  padding: 0;
  font-size: 16px;
  font-family: ${props => props.theme.secondaryFontFamily};
  border: none;
  cursor: pointer;
  background: none;
  color: ${props => (props.isLiked ? props.theme.primaryColor : props.theme.bodyColor)};

  :hover {
    color: ${props => props.theme.primaryColor};

    svg {
      path {
        stroke: ${props => props.theme.primaryColor};
      }
    }
  }
`;

const LikeText = styled.span`
  padding-left: 8px;
`;

interface Props {
  isLiked: boolean;
  count: number;
  onClick: () => void;
}

const LikeButton = ({ isLiked, count, onClick }: Props) => (
  <LikeWrapper type="button" isLiked={isLiked} onClick={onClick}>
    <Like isLiked={isLiked} width={18} />
    <LikeText>{count}</LikeText>
  </LikeWrapper>
);

export default LikeButton;

import React from 'react';

import styled from '../../theme';

import { LikeButton } from '..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Avatar = styled.img`
  width: 64px;
`;

const TextWrapper = styled.div`
  margin-left: 18px;
`;

const UserInfo = styled.div`
  font-family: ${props => props.theme.secondaryFontFamily};
  font-size: 18px;
`;

const User = styled.span`
  font-weight: 500;
  color: ${props => props.theme.titleColor};
`;

const Username = styled.span`
  color: ${props => props.theme.mutedColor};
`;

const Body = styled.p`
  margin: 0 0 8px 0;
  font-size: 18px;
`;

interface Props {
  avatar: string;
  fullName: string;
  username: string;
  body: string;

  onLikeClick: () => void;
  isLiked: boolean;
  likeCount: number;
}

const Card = ({ avatar, fullName, username, body, onLikeClick, isLiked, likeCount }: Props) => (
  <Wrapper>
    <Avatar src={avatar} alt={fullName} />
    <TextWrapper>
      <UserInfo>
        <User>{fullName}</User> <Username>@{username}</Username>
      </UserInfo>
      <Body>{body}</Body>

      <LikeButton isLiked={isLiked} count={likeCount} onClick={onLikeClick} />
    </TextWrapper>
  </Wrapper>
);

export default Card;

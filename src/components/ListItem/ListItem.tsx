import React from 'react';
import styled from '../../theme';

import { H3, Paragraph, PrimaryLinkButton } from '..';

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

interface Props {
  title: string;
  body: string;
  to: string;
  linkText?: string;
  onLinkHover?: () => void;
}

const ListemItem = ({ title, body, to, linkText = 'Devamı', onLinkHover }: Props) => (
  <div>
    <H3>{title}</H3>
    <Paragraph dangerouslySetInnerHTML={{ __html: body }} />

    <ButtonWrapper>
      <PrimaryLinkButton
        to={to}
        onMouseOver={() => {
          onLinkHover && onLinkHover();
        }}
      >
        {linkText}
      </PrimaryLinkButton>
    </ButtonWrapper>
  </div>
);

export default ListemItem;

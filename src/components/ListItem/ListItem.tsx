import React from 'react';
import styled from '../../theme';

import { H3, Paragraph, PrimaryLinkButton } from '..';

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

interface Props {
  title: string;
  summary: string;
  to: string;
}

const ListemItem = ({ title, summary, to }: Props) => (
  <div>
    <H3>{title}</H3>
    <Paragraph>{summary}</Paragraph>

    <ButtonWrapper>
      <PrimaryLinkButton to={to}>Devamı</PrimaryLinkButton>
    </ButtonWrapper>
  </div>
);

export default ListemItem;

import React from 'react';
import styled from '../../../theme';

import { H3, Paragraph } from '../../../components';
import { RelatedArtistProps } from './Detail';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 32px;
`;

interface Props {
  relateds: Array<RelatedArtistProps>;
}

const RelatedList = ({ relateds }: Props) => (
  <Wrapper>
    {relateds.map(related => (
      <div key={related.id}>
        <H3>{related.name}</H3>
        <Paragraph>{related.summary}</Paragraph>
      </div>
    ))}
  </Wrapper>
);

export default RelatedList;

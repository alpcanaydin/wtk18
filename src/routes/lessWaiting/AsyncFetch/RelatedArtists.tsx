import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import styled from '../../../theme';

import RequestWithCache from '../../../containers/RequestWithCache';

import { Loading, SectionTitle } from '../../../components';
import { RelatedArtistProps } from './Detail';
import RelatedList from './RelatedList';

const Wrapper = styled.div`
  margin-top: 64px;
`;

interface Props {
  networkDelay: number;
  relateds?: Array<RelatedArtistProps>;
  cacheEnabled: boolean;
}

const RelatedArtists = ({
  networkDelay,
  relateds,
  cacheEnabled,
  match,
}: Props & RouteComponentProps<{ id: string }>) => (
  <Wrapper>
    <SectionTitle>Benzer Artistler</SectionTitle>
    {relateds ? (
      <RelatedList relateds={relateds} />
    ) : (
      <RequestWithCache
        enabled={cacheEnabled}
        networkDelay={networkDelay}
        path={`/artist/${match.params.id}/relateds`}
      >
        {({ loading, response }) => {
          if (loading) {
            return <Loading />;
          }

          return <RelatedList relateds={response} />;
        }}
      </RequestWithCache>
    )}
  </Wrapper>
);

export default withRouter(RelatedArtists);

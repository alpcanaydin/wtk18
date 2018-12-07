import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import RequestWithCache from '../../../containers/RequestWithCache';

import { ListItem, Loading } from '../../../components';
import RelatedArtists from './RelatedArtists';

interface Props {
  networkDelay: number;
  asyncFetchEnabled: boolean;
  cacheEnabled: boolean;
}

export interface RelatedArtistProps {
  id: string;
  name: string;
  summary: string;
}

interface ArtistItem {
  id: string;
  name: string;
  body: string;
  relateds?: Array<RelatedArtistProps>;
}

const Detail = ({
  networkDelay,
  asyncFetchEnabled,
  cacheEnabled,
  match,
}: Props & RouteComponentProps<{ id: string }>) => (
  <RequestWithCache
    enabled={cacheEnabled}
    networkDelay={asyncFetchEnabled ? networkDelay : networkDelay * 1.5}
    path={asyncFetchEnabled ? `/artist/${match.params.id}/detail` : `/artist/${match.params.id}`}
  >
    {({ loading, response }: { loading: boolean; response: ArtistItem }) => {
      if (loading) {
        return <Loading showAfter={0} />;
      }

      return (
        <>
          <ListItem
            key={response.id}
            title={response.name}
            body={response.body}
            to={'/bekleme-tasarrufu/async-fetch'}
            linkText="Geri Dön"
          />

          <RelatedArtists
            cacheEnabled={cacheEnabled}
            networkDelay={networkDelay}
            relateds={response.relateds}
          />
        </>
      );
    }}
  </RequestWithCache>
);

export default withRouter(Detail);

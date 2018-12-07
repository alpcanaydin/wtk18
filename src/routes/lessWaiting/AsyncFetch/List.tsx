import React from 'react';

import RequestWithCache from '../../../containers/RequestWithCache';

import { List, ListItem, Loading } from '../../../components';

interface Props {
  networkDelay: number;
  cacheEnabled: boolean;
}

interface ArtistListItem {
  id: string;
  name: string;
  summary: string;
}

const AsyncFetchList = ({ networkDelay, cacheEnabled }: Props) => (
  <RequestWithCache enabled={cacheEnabled} networkDelay={networkDelay} path="/artists">
    {({ loading, response }) => {
      if (loading) {
        return <Loading showAfter={0} />;
      }

      return (
        <List>
          {response.map((item: ArtistListItem) => (
            <ListItem
              key={item.id}
              title={item.name}
              body={item.summary}
              to={`/bekleme-tasarrufu/async-fetch/${item.id}`}
            />
          ))}
        </List>
      );
    }}
  </RequestWithCache>
);

export default AsyncFetchList;

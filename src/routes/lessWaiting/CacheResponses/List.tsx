import React from 'react';

import RequestWithCache from '../../../containers/RequestWithCache';

import { List, ListItem, Loading } from '../../../components';

interface Props {
  networkDelay: number;
  cacheEnabled: boolean;
}

interface BlogListItem {
  id: string;
  title: string;
  summary: string;
}

const CacheResponsesList = ({ networkDelay, cacheEnabled }: Props) => (
  <RequestWithCache enabled={cacheEnabled} networkDelay={networkDelay} path="/blog">
    {({ loading, response }) => {
      if (loading) {
        return <Loading showAfter={0} />;
      }

      return (
        <List>
          {response.map((item: BlogListItem) => (
            <ListItem
              key={item.id}
              title={item.title}
              body={item.summary}
              to={`/bekleme-tasarrufu/responselarin-cachelenmesi/${item.id}`}
            />
          ))}
        </List>
      );
    }}
  </RequestWithCache>
);

export default CacheResponsesList;

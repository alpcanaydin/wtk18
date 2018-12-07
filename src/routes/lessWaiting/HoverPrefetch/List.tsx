import React from 'react';

import RequestWithCache, { prefetch } from '../../../containers/RequestWithCache';

import { List, ListItem, Loading } from '../../../components';

interface Props {
  networkDelay: number;
  prefetchEnabled: boolean;
}

interface BlogListItem {
  id: string;
  title: string;
  summary: string;
}

const HoverPrefetchEnabled = ({ networkDelay, prefetchEnabled }: Props) => (
  <RequestWithCache enabled={prefetchEnabled} networkDelay={networkDelay} path="/blog">
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
              to={`/bekleme-tasarrufu/hover-prefetch/${item.id}`}
              onLinkHover={() => {
                if (prefetchEnabled) {
                  prefetch(`/blog/${item.id}`, networkDelay);
                }
              }}
            />
          ))}
        </List>
      );
    }}
  </RequestWithCache>
);

export default HoverPrefetchEnabled;

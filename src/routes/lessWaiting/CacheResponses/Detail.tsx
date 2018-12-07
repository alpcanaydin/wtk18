import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import RequestWithCache from '../../../containers/RequestWithCache';

import { ListItem, Loading } from '../../../components';

interface Props {
  networkDelay: number;
  cacheEnabled: boolean;
}

interface BlogItem {
  id: string;
  title: string;
  body: string;
}

const Detail = ({
  networkDelay,
  cacheEnabled,
  match,
}: Props & RouteComponentProps<{ id: string }>) => (
  <RequestWithCache
    enabled={cacheEnabled}
    networkDelay={networkDelay}
    path={`/blog/${match.params.id}`}
  >
    {({ loading, response }: { loading: boolean; response: BlogItem }) => {
      if (loading) {
        return <Loading showAfter={0} />;
      }

      return (
        <ListItem
          key={response.id}
          title={response.title}
          body={response.body}
          to={'/bekleme-tasarrufu/responselarin-cachelenmesi'}
          linkText="Geri Dön"
        />
      );
    }}
  </RequestWithCache>
);

export default withRouter(Detail);

import React from 'react';

import { List, ListItem, Loading } from '../../../components';
import Request from '../../../containers/Request';
import ProfileHeader from './ProfileHeader';

const summary1 = `We can fix anything. These little son of a guns hide in your brush and you just have to push them out. Just relax and let it flow. That easy. Maybe, just to play a little, we'll put a little tree here. All you have to learn here is how to have fun.`;
const summary2 = `You don't have to be crazy to do this but it does help. If there's two big trees invariably sooner or later there's gonna be a little tree. We touch the canvas, the canvas takes what it wants. Trees grow however makes them happy.`;

const data = [{ title: 'Title 1', body: summary1 }, { title: 'Title 2', body: summary2 }];

interface Props {
  networkDelay: number;
  isRelatedUIEnabled: boolean;
}

const Posts = ({ networkDelay, isRelatedUIEnabled }: Props) => (
  <Request networkDelay={networkDelay} response={data}>
    {({ loading, response }) => {
      if (loading) {
        return (
          <>
            {isRelatedUIEnabled && <ProfileHeader />}
            <Loading />
          </>
        );
      }

      if (!response) {
        return <p>No data</p>;
      }

      return (
        <>
          <ProfileHeader />
          <List>
            {response.map(item => (
              <ListItem
                key={item.title}
                title={item.title}
                body={item.body}
                to="/gorsellik/ilgili-ui-guncellemesi/yazilar"
              />
            ))}
          </List>
        </>
      );
    }}
  </Request>
);

export default Posts;

import React from 'react';

import { List, ListItem } from '../../../components';

const summary1 = `We can fix anything. These little son of a guns hide in your brush and you just have to push them out. Just relax and let it flow. That easy. Maybe, just to play a little, we'll put a little tree here. All you have to learn here is how to have fun.`;
const summary2 = `You don't have to be crazy to do this but it does help. If there's two big trees invariably sooner or later there's gonna be a little tree. We touch the canvas, the canvas takes what it wants. Trees grow however makes them happy.`;

const DelayedLoadingList = () => (
  <List>
    <ListItem title="Title 1" body={summary1} to="/manipulasyon/gecikmeli-loading/detay" />
    <ListItem title="Title 2" body={summary2} to="/manipulasyon/gecikmeli-loading/detay" />
  </List>
);

export default DelayedLoadingList;

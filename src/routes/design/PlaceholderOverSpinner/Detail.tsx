import React from 'react';

import { Loading, ListItem } from '../../../components';

import Request from '../../../containers/Request';
import Placeholder from './Placeholder';

const data = {
  title: 'Title 1',
  body: `<p>
  You don't have to be crazy to do this but it does help. There's nothing wrong with having a tree
  as a friend. I spend a lot of time walking around in the woods and talking to trees, and
  squirrels, and little rabbits and stuff.
</p>

<p>
  This is an example of what you can do with just a few things, a little imagination and a happy
  dream in your heart. Isn't it fantastic that you can change your mind and create all these happy
  things? Isn't that fantastic? You can just push a little tree out of your brush like that.
</p>

<p>
  And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. We don't need
  any guidelines or formats. All we need to do is just let it flow right out of us. There is immense
  joy in just watching - watching all the little creatures in nature. I think there's an artist
  hidden in the bottom of every single one of us. Talk to trees, look at the birds. Whatever it
  takes.
</p>
`,
};

type Props = {
  networkDelay: number;
  showPlaceholder: boolean;
};

const Detail = ({ networkDelay, showPlaceholder }: Props) => (
  <Request networkDelay={networkDelay} response={data}>
    {({ loading, response }) => {
      if (loading) {
        if (showPlaceholder) {
          return <Placeholder />;
        }

        return <Loading showAfter={0} />;
      }

      if (!response) {
        return <p>No data</p>;
      }

      return (
        <ListItem
          title={response.title}
          body={response.body}
          to="/gorsellik/spinner-yerine-placeholder"
          linkText="Geri Dön"
        />
      );
    }}
  </Request>
);

export default Detail;

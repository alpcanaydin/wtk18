import React from 'react';

import { Loading } from '../../../components';
import Request from '../../../containers/Request';
import ProfileHeader from './ProfileHeader';

const about = `We can fix anything. These little son of a guns hide in your brush and you just have to push them out. Just relax and let it flow. That easy. Maybe, just to play a little, we'll put a little tree here. All you have to learn here is how to have fun.`;

interface Props {
  networkDelay: number;
  isRelatedUIEnabled: boolean;
}

const About = ({ networkDelay, isRelatedUIEnabled }: Props) => (
  <Request networkDelay={networkDelay} response={about}>
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
          <p>{about}</p>
        </>
      );
    }}
  </Request>
);

export default About;

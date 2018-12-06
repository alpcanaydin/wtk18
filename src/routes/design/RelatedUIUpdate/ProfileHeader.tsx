import React from 'react';

import styled from '../../../theme';

import { H1, Paragraph, Tabbar, TabbarLink } from '../../../components';

const TabbarWrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 32px;
`;

const ProfileHeader = () => (
  <>
    <H1>John Doe</H1>
    <Paragraph>
      John Doe ismi tasarımlarda bir kullanıcı için isim ve soyisim için kullanılır.
    </Paragraph>

    <TabbarWrapper>
      <Tabbar>
        <TabbarLink to="/gorsellik/ilgili-ui-guncellemesi" exact={true} activeClassName="isActive">
          Hakkında
        </TabbarLink>
        <TabbarLink
          to="/gorsellik/ilgili-ui-guncellemesi/yazilar"
          exact={true}
          activeClassName="isActive"
        >
          Yazıları
        </TabbarLink>
      </Tabbar>
    </TabbarWrapper>
  </>
);

export default ProfileHeader;

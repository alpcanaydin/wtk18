import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Container,
  SectionTitle,
  Settings,
  SettingsInput,
  SettingsToggle,
} from '../../../components';

import List from './List';
import Detail from './Detail';

const DelayedLoading = () => {
  const [networkDelay, setNetworkDelay] = useState(200);
  const [cacheEnabled, setCacheEnabled] = useState(false);

  return (
    <Container>
      <SectionTitle>Response'ların Cache'lenmesi</SectionTitle>

      <Switch>
        <Route
          exact={true}
          path="/bekleme-tasarrufu/responselarin-cachelenmesi"
          render={() => <List networkDelay={networkDelay} cacheEnabled={cacheEnabled} />}
        />
        <Route
          exact={true}
          path="/bekleme-tasarrufu/responselarin-cachelenmesi/:id"
          render={() => <Detail networkDelay={networkDelay} cacheEnabled={cacheEnabled} />}
        />
      </Switch>

      <Settings>
        <SettingsInput
          label="Network Cevap Süresi"
          value={networkDelay}
          onChange={setNetworkDelay}
        />
        <SettingsToggle label="Cache Aktif Mi?" value={cacheEnabled} onChange={setCacheEnabled} />
      </Settings>
    </Container>
  );
};

export default DelayedLoading;

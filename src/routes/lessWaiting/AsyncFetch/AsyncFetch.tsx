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

const AsyncFetch = () => {
  const [networkDelay, setNetworkDelay] = useState(200);
  const [asyncFetchEnabled, setAsyncCacheEnabled] = useState(false);
  const [cacheEnabled, setCacheEnabled] = useState(false);

  return (
    <Container>
      <SectionTitle>Daha Az Önemli Data’nın Asenkron Çekilmesi</SectionTitle>

      <Switch>
        <Route
          exact={true}
          path="/bekleme-tasarrufu/async-fetch"
          render={() => <List networkDelay={networkDelay} cacheEnabled={cacheEnabled} />}
        />
        <Route
          exact={true}
          path="/bekleme-tasarrufu/async-fetch/:id"
          render={() => (
            <Detail
              networkDelay={networkDelay}
              asyncFetchEnabled={asyncFetchEnabled}
              cacheEnabled={cacheEnabled}
            />
          )}
        />
      </Switch>

      <Settings>
        <SettingsInput
          label="Network Cevap Süresi"
          value={networkDelay}
          onChange={setNetworkDelay}
        />
        <SettingsToggle label="Cache Aktif Mi?" value={cacheEnabled} onChange={setCacheEnabled} />
        <SettingsToggle
          label="Asenkron Çekme Aktif Mi?"
          value={asyncFetchEnabled}
          onChange={setAsyncCacheEnabled}
        />
      </Settings>
    </Container>
  );
};

export default AsyncFetch;

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

const HoverPrefetch = () => {
  const [networkDelay, setNetworkDelay] = useState(200);
  const [prefetchEnabled, setPrefetchEnabled] = useState(false);

  return (
    <Container>
      <SectionTitle>Hover Prefetch</SectionTitle>

      <Switch>
        <Route
          exact={true}
          path="/bekleme-tasarrufu/hover-prefetch"
          render={() => <List networkDelay={networkDelay} prefetchEnabled={prefetchEnabled} />}
        />
        <Route
          exact={true}
          path="/bekleme-tasarrufu/hover-prefetch/:id"
          render={() => <Detail networkDelay={networkDelay} prefetchEnabled={prefetchEnabled} />}
        />
      </Switch>

      <Settings>
        <SettingsInput
          label="Network Cevap Süresi"
          value={networkDelay}
          onChange={setNetworkDelay}
        />
        <SettingsToggle
          label="Prefetch Aktif Mi?"
          value={prefetchEnabled}
          onChange={setPrefetchEnabled}
        />
      </Settings>
    </Container>
  );
};

export default HoverPrefetch;

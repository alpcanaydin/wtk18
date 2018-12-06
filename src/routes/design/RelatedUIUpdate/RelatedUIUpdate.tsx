import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Container,
  SectionTitle,
  Settings,
  SettingsInput,
  SettingsToggle,
} from '../../../components';

import About from './About';
import Posts from './Posts';

const RelatedUIUpdate = () => {
  const [networkDelay, setNetworkDelay] = useState(300);
  const [isRelatedUIEnabled, setRelatedUI] = useState(false);

  return (
    <Container>
      <SectionTitle>Router Sayesinde İlgili UI Güncellemesi</SectionTitle>

      <Switch>
        <Route
          exact={true}
          path="/gorsellik/ilgili-ui-guncellemesi"
          render={() => (
            <About networkDelay={networkDelay} isRelatedUIEnabled={isRelatedUIEnabled} />
          )}
        />

        <Route
          exact={true}
          path="/gorsellik/ilgili-ui-guncellemesi/yazilar"
          render={() => (
            <Posts networkDelay={networkDelay} isRelatedUIEnabled={isRelatedUIEnabled} />
          )}
        />
        <Route />
      </Switch>

      <Settings>
        <SettingsInput
          label="Network Cevap Süresi"
          value={networkDelay}
          onChange={setNetworkDelay}
        />
        <SettingsToggle
          label="İlgili UI Guncelleme"
          value={isRelatedUIEnabled}
          onChange={setRelatedUI}
        />
      </Settings>
    </Container>
  );
};

export default RelatedUIUpdate;

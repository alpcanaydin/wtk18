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

const PlaceholderOverSpinner = () => {
  const [networkDelay, setNetworkDelay] = useState(200);
  const [showPlaceholder, setPlaceholderVisibility] = useState(false);

  return (
    <Container>
      <SectionTitle>Spinner Yerine Placeholder</SectionTitle>

      <Switch>
        <Route exact={true} path="/gorsellik/spinner-yerine-placeholder" component={List} />
        <Route
          exact={true}
          path="/gorsellik/spinner-yerine-placeholder/detay"
          render={() => <Detail networkDelay={networkDelay} showPlaceholder={showPlaceholder} />}
        />
      </Switch>

      <Settings>
        <SettingsInput
          label="Network Cevap Süresi"
          value={networkDelay}
          onChange={setNetworkDelay}
        />
        <SettingsToggle
          label="Placeholder Açık mı?"
          value={showPlaceholder}
          onChange={setPlaceholderVisibility}
        />
      </Settings>
    </Container>
  );
};

export default PlaceholderOverSpinner;

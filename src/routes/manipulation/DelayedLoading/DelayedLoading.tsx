import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, SectionTitle, Settings, SettingsInput } from '../../../components';

import List from './List';
import Detail from './Detail';

const DelayedLoading = () => {
  const [networkDelay, setNetworkDelay] = useState(200);
  const [showLoadingAfter, setShowLoadingAfter] = useState(0);

  return (
    <Container>
      <SectionTitle>Gecikmeli Loading</SectionTitle>

      <Switch>
        <Route exact={true} path="/manipulasyon/gecikmeli-loading" component={List} />
        <Route
          exact={true}
          path="/manipulasyon/gecikmeli-loading/detay"
          render={() => <Detail networkDelay={networkDelay} showLoadingAfter={showLoadingAfter} />}
        />
      </Switch>

      <Settings>
        <SettingsInput
          label="Network Cevap Süresi"
          value={networkDelay}
          onChange={setNetworkDelay}
        />
        <SettingsInput
          label="Loading Gecikmesi"
          value={showLoadingAfter}
          onChange={setShowLoadingAfter}
        />
      </Settings>
    </Container>
  );
};

export default DelayedLoading;

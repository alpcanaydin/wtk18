import React, { Fragment } from 'react';

import { NetworkDelayProvider } from './contexts/NetworkDelay';

import Routes from './routes';

const App = () => (
  <NetworkDelayProvider>
    <Routes />
  </NetworkDelayProvider>
);

export default App;

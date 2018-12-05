import React from 'react';

import { NetworkDelay } from '../../../contexts/NetworkDelay';

const DelayedLoading = () => (
  <NetworkDelay>{({ delay }) => <p>Network delay: {delay}</p>}</NetworkDelay>
);

export default DelayedLoading;

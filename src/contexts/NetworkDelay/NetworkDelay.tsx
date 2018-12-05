import React, { ReactNode } from 'react';

import Context, { NetworkDelayProps } from './Context';

interface Props {
  children: (params: NetworkDelayProps) => ReactNode;
}

const NetworkDelay = ({ children }: Props) => <Context.Consumer>{children}</Context.Consumer>;

export default NetworkDelay;

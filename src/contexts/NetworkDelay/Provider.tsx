import React, { useState, ReactNode } from 'react';

import Context from './Context';

type Props = {
  delay?: number;
  children: ReactNode;
};

const Provider = (props: Props) => {
  const [delay, setDelay] = useState(props.delay || 0);

  return <Context.Provider value={{ delay, setDelay }}>{props.children}</Context.Provider>;
};

export default Provider;

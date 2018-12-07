import React, { ReactNode, useEffect, useState } from 'react';

import networkStore from '../../utils/networkStore';
import api from '../../utils/api';

interface ChildProps {
  loading: boolean;
  response: any;
}

interface Props {
  children: (params: ChildProps) => ReactNode;
  networkDelay: number;
  path: string;
  enabled: boolean;
}

const RequestWithCache = ({ children, networkDelay, path, enabled }: Props) => {
  const [response, setResponse] = useState(
    enabled && networkStore.has(path) ? networkStore.get(path) : undefined,
  );

  useEffect(
    () => {
      if (enabled && networkStore.has(path)) {
        setResponse(networkStore.get(path));
        return;
      }

      api.get(path, networkDelay).then(data => {
        if (enabled) {
          networkStore.set(path, data);
        }
        setResponse(data);
      });
    },
    ['response'],
  );

  return (
    <>
      {children({
        loading: !response,
        response,
      })}
    </>
  );
};

export default RequestWithCache;

import React, { ReactNode, useState, useEffect, FunctionComponent } from 'react';

interface ChildrenProps<T> {
  loading: boolean;
  response?: T;
}

interface Props<T> {
  networkDelay: number;
  response: T;
  children: (params: ChildrenProps<T>) => ReactNode;
}

const Request = <T extends {}>({ children, networkDelay, response }: Props<T>) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, networkDelay);

    return () => {
      clearTimeout(timer);
    };
  });

  if (typeof children !== 'function') {
    throw new Error('Please provide a function for children');
  }

  if (done) {
    return <>{children({ loading: false, response })}</>;
  }

  return <>{children({ loading: true, response: undefined })}</>;
};

export default Request;

import React, { useState, ReactNode } from 'react';

interface ChildProps<T> {
  state: T;
  updateState: (newData: T) => void;
}

interface Props<T> {
  initialState: T;
  children: (params: ChildProps<T>) => ReactNode;
}

const Cache = <T extends {}>({ initialState, children }: Props<T>) => {
  const [state, updateState] = useState(initialState);

  return <>{children({ state, updateState })}</>;
};

export default Cache;

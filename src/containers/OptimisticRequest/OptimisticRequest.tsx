import React, { ReactNode } from 'react';

interface Props<T> {
  children: (fn: () => void) => ReactNode;
  enabled: boolean;
  networkDelay: number;
  currentData: T;
  optimisticResponse: T;
  response: T;
  succeded: boolean;
  onResponse: (data: T) => void;
}

const OptimisticRequest = <T extends {}>({
  children,
  enabled,
  networkDelay,
  currentData,
  optimisticResponse,
  response,
  succeded,
  onResponse,
}: Props<T>) => {
  return (
    <>
      {children(() => {
        if (enabled) {
          onResponse(optimisticResponse);
        }

        setTimeout(() => {
          if (enabled) {
            onResponse(succeded ? response : currentData);
            return;
          }

          onResponse(response);
        }, networkDelay);
      })}
    </>
  );
};

export default OptimisticRequest;

import { createContext, Dispatch, SetStateAction } from 'react';

export interface NetworkDelayProps {
  delay: number;
  setDelay: Dispatch<SetStateAction<number>>;
}

export default createContext({ delay: 0, setDelay: () => {} } as NetworkDelayProps);

import { createContext, useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IReactContext {
  logOut: () => void;
}

export const ReactContext = createContext<IReactContext>(null);

export function useReactContext() {
  return useContext(ReactContext) as IReactContext;
}

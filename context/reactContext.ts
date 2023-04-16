import { createContext, useContext } from 'react';

import { SignUpClientType } from '../API/restClient/types';

export interface IReactContext {
  signUp: SignUpClientType;
  setSignUp: React.Dispatch<React.SetStateAction<SignUpClientType>>;
}

export const ReactContext = createContext<IReactContext>(null);

export function useReactContext() {
  return useContext(ReactContext) as IReactContext;
}

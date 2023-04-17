import restClient from './defaultClient';
import { SignInClientType, SignUpClientType } from './types';

export const signUpClient = (data: SignUpClientType) => {
  return restClient.post({ url: '/auth/sign-up', data });
};

export const signInClient = (data: SignInClientType) => {
  return restClient.post({ url: '/auth/sign-in', data });
};

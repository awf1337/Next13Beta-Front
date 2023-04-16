import restClient from './defaultClient';
import { SignUpClientType } from './types';

const resourceUrl = '/auth/sign-up';

export const signUpClient = (data: SignUpClientType) => {
  return restClient.post({ url: `${resourceUrl}`, data });
};

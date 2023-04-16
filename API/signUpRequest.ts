import { signUpClient } from './restClient';
import { SignUpClientType } from './restClient/types';

export const signUpRequest = async (data: SignUpClientType) => {
  const signUpData = await signUpClient(data);

  if (signUpData.message && signUpData.error) {
    throw signUpData.message;
  }

  return signUpData.data;
};

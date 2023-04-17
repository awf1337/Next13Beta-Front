import { signInClient, signUpClient } from './restClient';
import { SignInClientType, SignUpClientType } from './restClient/types';

export const signUpRequest = async (data: SignUpClientType) => {
  const signUpData = await signUpClient(data);

  if (signUpData.message && signUpData.error) {
    throw signUpData.message;
  }

  return signUpData.data;
};

export const signInRequest = async (data: SignInClientType) => {
  const signUpData = await signInClient(data);

  if (signUpData.message && signUpData.error) {
    throw signUpData.message;
  }

  return signUpData.data;
};

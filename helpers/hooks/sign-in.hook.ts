import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { signInRequest } from '../../API';

export const signInHook = () => {
  const { push } = useRouter();
  const [loginCredential, setLoginCredentials] = useState({
    email: '',
    password: '',
    remember: true,
  });
  const [badCredential, setBadCredential] = useState(false);

  const { mutate, isError } = useMutation(signInRequest, {
    onSuccess: () => {
      push('/dashboard');
    },
  });

  useEffect(() => {
    setBadCredential(isError);
  }, [isError]);

  const handleLogIn = () => {
    mutate(loginCredential);
  };

  return {
    loginCredential,
    setLoginCredentials,
    handleLogIn,
    isError,
    setBadCredential,
    badCredential,
  };
};

export default signInHook;

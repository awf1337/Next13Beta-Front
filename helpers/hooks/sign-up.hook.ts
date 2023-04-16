import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

import { signUpRequest } from '../../API';
import { useReactContext } from '../../context/reactContext';
import validateEmail from '../functions/validateEmail';
import validatePassword from '../functions/validatePassword';

export const signUpHook = () => {
  const { push } = useRouter();
  const { signUp, setSignUp } = useReactContext();
  const [validation, setValidation] = useState({
    TC: true,
    username: true,
    email: true,
    password: true,
    signUpPressed: false,
  });
  const [emailExists, setEmailExists] = useState(false);

  const { mutate, isLoading, isError, error, data } = useMutation(
    signUpRequest,
    {
      onSuccess: () => {
        push('/dashboard');
      },
      onError: () => {
        toast.error(`MerchantSkin failed to create!`);
      },
    }
  );

  useEffect(() => {
    if (typeof error === 'string' && error.includes('Email already exists')) {
      setValidation((prevState) => ({
        ...prevState,
        email: false,
      }));
      setEmailExists(true);
    }
  }, [isError]);

  useEffect(() => {
    console.log(data?.data?.accessToken);
    if (data && data.data.accessToken) {
      const token = data.data.accessToken;
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
    }
  }, [data]);

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;

    if (validation.signUpPressed)
      setValidation((prevState) => ({
        ...prevState,
        username: username.length > 0 ? true : false,
      }));

    setSignUp((prevState) => ({ ...prevState, username: username }));
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;

    if (validation.signUpPressed)
      setValidation((prevState) => ({
        ...prevState,
        email: validateEmail(email) ? true : false,
      }));

    setSignUp((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;

    if (validation.signUpPressed)
      setValidation((prevState) => ({
        ...prevState,
        password: validatePassword(password) ? true : false,
      }));

    setSignUp((prevState) => ({
      ...prevState,
      password: password,
    }));
  };

  const handleTC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    setValidation((prevState) => ({
      ...prevState,
      TC: checked ? true : false,
    }));

    setSignUp((prevState) => ({ ...prevState, TC: event.target.checked }));
  };

  const handleSubmit = () => {
    console.log('submit validation', fieldsValidation());
    if (fieldsValidation()) mutate(signUp);
  };

  const fieldsValidation = () => {
    if (!signUp.TC) {
      setValidation((prevState) => ({ ...prevState, TC: false }));
    }

    if (!signUp.username) {
      setValidation((prevState) => ({ ...prevState, username: false }));
    }

    if (!validateEmail(signUp.email)) {
      setValidation((prevState) => ({ ...prevState, email: false }));
    }

    if (!validatePassword(signUp.password)) {
      setValidation((prevState) => ({ ...prevState, password: false }));
    }

    setValidation((prevState) => ({ ...prevState, signUpPressed: true }));

    if (
      signUp.TC === true &&
      signUp.username.length > 0 &&
      validateEmail(signUp.email) &&
      validatePassword(signUp.password)
    ) {
      const bufferToEncode = Buffer.from(signUp.password);
      const encodedPassword = bufferToEncode.toString('base64');

      setSignUp((prevState) => ({
        ...prevState,
        password: encodedPassword,
      }));

      return true;
    }

    return false;
  };

  return {
    isLoading,
    handleSubmit,
    handleTC,
    handlePassword,
    handleEmail,
    handleUsername,
    validation,
    emailExists,
  };
};

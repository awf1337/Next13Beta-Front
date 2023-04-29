import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { signUpRequest } from '../../API';
import { SignUpClientType } from '../../API/restClient/types';
import validateEmail from '../functions/validateEmail';
import validatePassword from '../functions/validatePassword';

export const signUpHook = () => {
  const { push } = useRouter();

  const [signUp, setSignUp] = useState<SignUpClientType>({
    username: '',
    email: '',
    password: '',
    TC: false,
  });

  const [validation, setValidation] = useState({
    TC: true,
    username: true,
    email: true,
    password: true,
    signUpPressed: false,
  });
  const [emailExists, setEmailExists] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const { mutate, isLoading, isError, error } = useMutation(signUpRequest, {
    onSuccess: () => {
      push('/dashboard');
    },
  });

  useEffect(() => {
    if (typeof error === 'string' && error.includes('Email already exists')) {
      setValidation((prevState) => ({
        ...prevState,
        email: false,
      }));
      setEmailExists(true);
    }
  }, [isError]);

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
    passwordVisibility,
    setPasswordVisibility,
    validation,
    emailExists,
  };
};

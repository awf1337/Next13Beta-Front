import { useState } from 'react';

import { SignUpClientType } from '../API/restClient/types';
import { ReactContext } from './reactContext';

const ReactProvider = ({ children }) => {
  const [signUp, setSignUp] = useState<SignUpClientType>({
    username: '',
    email: '',
    password: '',
    TC: false,
  });

  return (
    <ReactContext.Provider
      value={{
        signUp,
        setSignUp,
      }}
    >
      {children}
    </ReactContext.Provider>
  );
};

export { ReactProvider };

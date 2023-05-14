'use client';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactContext } from './reactContext';

const queryClient = new QueryClient();

const ReactProvider = ({ children }) => {
  const logOut = () => {
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <QueryClientProvider client={queryClient}>
      <ReactContext.Provider value={{ logOut }}>
        {children}
      </ReactContext.Provider>
    </QueryClientProvider>
  );
};

export { ReactProvider };

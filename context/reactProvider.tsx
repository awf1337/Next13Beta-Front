import { ReactContext } from './reactContext';

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
    <ReactContext.Provider value={{ logOut }}>{children}</ReactContext.Provider>
  );
};

export { ReactProvider };

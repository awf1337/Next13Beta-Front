'use client';

import { useReactContext } from '../../context/reactContext';

export default function Home() {
  const { logOut } = useReactContext();
  const getUsers = () => {
    fetch('/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <div>
      <h1 className="text-white">Hello,Dashboard!</h1>
      <button onClick={getUsers} className="text-white border-2">
        Get Users
      </button>
      <button onClick={logOut} className="text-white border-2">
        Log out
      </button>
    </div>
  );
}

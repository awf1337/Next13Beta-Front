'use client';

import { useRouter } from 'next/navigation';
import { AiOutlineLogin } from 'react-icons/ai';

const LogInButton = () => {
  const router = useRouter();
  return (
    <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
      <button
        className="font-bold rounded-full text-white transform transition duration-500 hover:scale-125"
        onClick={() => router.push('/auth/sign-in')}
      >
        <AiOutlineLogin size={40} color="inherit" />
      </button>
    </div>
  );
};

export default LogInButton;

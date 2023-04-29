'use client';

import { usePathname, useRouter } from 'next/navigation';
import { AiOutlineLogin } from 'react-icons/ai';

const LogInButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const logInButtonNavigation = () => {
    if (pathname === '/auth/sign-in') router.push('/');
    if (pathname !== '/auth/sign-in') router.push('/auth/sign-in');
  };

  return (
    <button
      className={`font-bold rounded-full text-white transform transition duration-500 hover:scale-125 ${className}`}
      onClick={logInButtonNavigation}
    >
      <AiOutlineLogin size={40} color="inherit" />
    </button>
  );
};

export default LogInButton;

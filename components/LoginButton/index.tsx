'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineLogin } from 'react-icons/ai';

import { nextPublicRoutes, reddirectRoutes } from '../../public.routes';

const LogInButton = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  const href = (() => {
    if (reddirectRoutes.includes(pathname)) return nextPublicRoutes.home;
    if (!reddirectRoutes.includes(pathname)) return nextPublicRoutes.signIn;
  })();

  return (
    <Link
      href={href}
      className={`font-bold rounded-full text-white transform transition duration-500 hover:scale-125 ${className}`}
    >
      <AiOutlineLogin size={40} color="inherit" />
    </Link>
  );
};

export default LogInButton;

'use client';
import { usePathname } from 'next/navigation';

import LogInButton from '../LoginButton';

const LayoutPublic = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {children}{' '}
      {pathname.includes('auth') && (
        <LogInButton className="fixed top-[20px] left-[20px] rotate-180" />
      )}
    </>
  );
};
export default LayoutPublic;

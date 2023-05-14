'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Logo = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex flex-col justify-center items-center cursor-pointer ${className}`}
    >
      <Link href={pathname}>BullBot</Link>
    </div>
  );
};

export default Logo;

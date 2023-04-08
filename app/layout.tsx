'use client';
import '../styles/globals.css';

import { usePathname } from 'next/navigation';

import LogInButton from '../components/LoginButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <title>BullBot</title>
      <body>
        <main>
          {children}
          {pathname === '/' && <LogInButton />}
        </main>
      </body>
    </html>
  );
}

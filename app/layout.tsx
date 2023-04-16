'use client';
import '../styles/globals.css';

import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

import LogInButton from '../components/LoginButton';
import { ReactProvider } from '../context/reactProvider';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <title>BullBot</title>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>

      <body>
        <main>
          <QueryClientProvider client={queryClient}>
            <ReactProvider>
              {children}
              {pathname === '/' && <LogInButton />}
            </ReactProvider>
          </QueryClientProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
        </main>
      </body>
    </html>
  );
}

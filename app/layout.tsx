'use client';
import '../styles/globals.css';

import { usePathname } from 'next/navigation';
import { QueryClient, QueryClientProvider } from 'react-query';

import LayoutPrivate from '../components/LayoutPrivate';
import LogInButton from '../components/LoginButton';
import { ReactProvider } from '../context/reactProvider';
import { nextPrivateRoutesArr } from '../private.routes';

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
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
      </head>

      <body>
        <main>
          <QueryClientProvider client={queryClient}>
            <ReactProvider>
              {!nextPrivateRoutesArr.includes(pathname) && children}

              {nextPrivateRoutesArr.includes(pathname) && (
                <LayoutPrivate children={children} />
              )}

              {pathname.includes('auth') && (
                <LogInButton className="fixed top-[20px] left-[20px] rotate-180" />
              )}
            </ReactProvider>
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}

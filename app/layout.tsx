import '../styles/globals.css';

import { headers } from 'next/headers';

import LayoutPrivate from '../components/LayoutPrivate';
import LayoutPublic from '../components/LayoutPublic';
import { ReactProvider } from '../context/reactProvider';
import { nextPrivateRoutesArr } from '../private.routes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const header_url = headersList.get('x-url') || '';
  const uri = new URL(header_url);

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
          <ReactProvider>
            {!nextPrivateRoutesArr.includes(uri.pathname) && (
              <LayoutPublic children={children} />
            )}

            {nextPrivateRoutesArr.includes(uri.pathname) && (
              <LayoutPrivate children={children} />
            )}
          </ReactProvider>
        </main>
      </body>
    </html>
  );
}

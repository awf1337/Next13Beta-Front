'use client';

import Globe from '../components/Globe';
import LogInButton from '../components/LoginButton';
import LogoBullBot from '../components/LogoApplication/LogoBullBot';
import TopCrypto from '../components/TopCrypto/indext';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <LogInButton className="fixed top-[20px] right-[20px]" />

      <div className="container bg-red flex flex-col justify-center items-center h-1/5">
        <LogoBullBot />
      </div>

      <div className="h-full flex justify-center relative">
        <div className="w-1/4 flex flex-column justify-center items-center z-[1]">
          <TopCrypto />
        </div>

        <div className="h-full w-1/2  absolute right-0 bottom-0">
          <Globe />
        </div>
      </div>
    </div>
  );
}

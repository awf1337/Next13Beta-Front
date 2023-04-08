'use client';

import Globe from '../components/Globe';
import TopCrypto from '../components/TopCrypto/indext';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="container bg-red flex flex-col justify-center items-center h-1/5">
        <h1 className="text-white text-2xl select-none">Bullbot</h1>
      </div>

      <div className="h-full flex justify-center">
        <div className="w-1/4 flex flex-column justify-center items-center">
          <TopCrypto />
        </div>
        <div className="h-full w-1/2 flex flex-col justify-center">
          <Globe />
        </div>
        <div className="w-1/4 flex flex-column justify-center items-center">
          <TopCrypto />
        </div>
      </div>
    </div>
  );
}

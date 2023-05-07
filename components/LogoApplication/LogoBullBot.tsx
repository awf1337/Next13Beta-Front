import { usePathname, useRouter } from 'next/navigation';

import { nextPrivateRoutes } from '../../private.routes';
import { nextPublicRoutes, reddirectRoutes } from '../../public.routes';

const LogoBullBot = () => {
  const router = useRouter();
  const pathname = usePathname();

  const reddirectLogo = () => {
    if (reddirectRoutes.includes(pathname)) router.push(nextPublicRoutes.home);
    if (!reddirectRoutes.includes(pathname))
      router.push(nextPrivateRoutes.dashboard);
  };

  return (
    <h1
      onClick={reddirectLogo}
      className={`${
        pathname !== nextPublicRoutes.home && 'cursor-pointer'
      } text-white text-2xl select-none font-semibold`}
    >
      BullBot
    </h1>
  );
};

export default LogoBullBot;

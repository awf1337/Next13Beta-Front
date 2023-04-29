import { usePathname, useRouter } from 'next/navigation';

const publicPaths = ['/auth/sign-in', '/', '/auth/sign-up'];

const LogoBullBot = () => {
  const router = useRouter();
  const path = usePathname();

  const reddirectLogo = () => {
    if (publicPaths.includes(path)) router.push('/');
    if (!publicPaths.includes(path)) router.push('/dashboard');
  };

  return (
    <h1
      onClick={reddirectLogo}
      className={`${
        path !== '/' && 'cursor-pointer'
      } text-white text-2xl select-none font-semibold`}
    >
      BullBot
    </h1>
  );
};

export default LogoBullBot;

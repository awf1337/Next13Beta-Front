'use client';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Input,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';

import LogoBullBot from '../../../components/LogoApplication/LogoBullBot';
import signInHook from '../../../helpers/hooks/sign-in.hook';

const SignIn = () => {
  const {
    setLoginCredentials,
    handleLogIn,
    setBadCredential,
    badCredential,
    loginCredential,
  } = signInHook();
  return (
    <>
      <img
        src="/body-background.png"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50 flex" />
      <div className="container mx-auto p-4">
        <div className="absolute left-2/4 -translate-x-2/4 top-[40px]">
          <LogoBullBot />
        </div>
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              size="lg"
              onChange={(e: any) => {
                setLoginCredentials((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
                setBadCredential(false);
              }}
              error={badCredential}
            />
            <Input
              type="password"
              label="Password"
              size="lg"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleLogIn();
              }}
              onChange={(e: any) => {
                setLoginCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
                setBadCredential(false);
              }}
              error={badCredential}
            />
            <div className="-ml-2.5">
              <Checkbox
                label="Remember Me"
                checked={loginCredential.remember}
                onChange={(e: any) => {
                  setLoginCredentials((prev) => ({
                    ...prev,
                    remember: e.target.checked,
                  }));
                  setBadCredential(e.target.checked);
                }}
              />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleLogIn}>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link href="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default SignIn;

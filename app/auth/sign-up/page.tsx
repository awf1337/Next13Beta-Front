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

import { signUpHook } from '../../../helpers/hooks/sign-up.hook';

const SignUp = () => {
  const {
    handleSubmit,
    handleTC,
    handleUsername,
    handleEmail,
    handlePassword,
    validation,
    emailExists,
  } = signUpHook();

  return (
    <>
      <img
        src="/body-background.png"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Username"
              size="lg"
              onChange={handleUsername}
              error={!validation.username}
            />
            <Input
              type="email"
              label={emailExists ? 'Email already exists' : 'Email'}
              size="lg"
              onChange={handleEmail}
              error={!validation.email}
            />
            <div>
              <Input
                type="password"
                label="Password"
                size="lg"
                onChange={handlePassword}
                error={!validation.password}
              />
            </div>

            <div className="-ml-2.5">
              <Checkbox
                label="I agree the Terms and Conditions"
                onChange={handleTC}
                labelProps={{ className: !validation.TC ? 'text-red-500' : '' }}
                className="text-red-500"
              />
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleSubmit}>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link href="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default SignUp;

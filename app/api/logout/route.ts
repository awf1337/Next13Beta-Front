import cookie from 'cookie';

export async function POST() {
  const serializedToken = cookie.serialize('Authorization', '', {
    httpOnly: true,
    secure: false,
    expires: new Date(0),
    path: '/',
    sameSite: false,
  });

  return new Response('Success!', {
    status: 200,
    headers: { 'Set-Cookie': serializedToken },
  });
}

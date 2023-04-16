import cookie from 'cookie';
import { NextApiRequest } from 'next';

export async function POST(req: NextApiRequest) {
  const data = await readStream(req.body);
  const token = JSON.parse(data).token;

  const serializedToken = cookie.serialize('token', token, {
    httpOnly: true,
    secure: false,
    maxAge: 3600,
    path: '/',
    sameSite: false,
  });

  return new Response('Cookies!', {
    status: 200,
    headers: { 'Set-Cookie': serializedToken },
  });

  async function readStream(stream: ReadableStream) {
    const reader = stream.getReader();
    let result = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return result;
      }
      result += new TextDecoder().decode(value);
    }
  }
}

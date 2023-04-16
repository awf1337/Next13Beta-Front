import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();
// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
};
export default (req, res) => {
  return new Promise<void>((resolve, reject) => {
    proxy.web(
      req,
      res,
      { target: process.env.NEXT_PUBLIC_API_URL, changeOrigin: true },
      (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      }
    );
  });
};

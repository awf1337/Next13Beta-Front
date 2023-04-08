import { useEffect, useState } from 'react';

const topCryptoHook = () => {
  const [BTCUSDT, setBTCUSDT] = useState<number>();
  const [ETHUSDT, setETHUSDT] = useState<number>();
  const [BNBUSDT, setBNBUSDT] = useState<number>();
  const [EGLDUSDT, setEGLDUSDT] = useState<number>();
  const [XRPUSDT, setXRPUSDT] = useState<number>();
  const [socketError, setSocketError] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws');

    ws.onopen = () => {
      const message = {
        method: 'SUBSCRIBE',
        params: [
          'btcusdt@ticker',
          'ethusdt@ticker',
          'bnbusdt@ticker',
          'egldusdt@ticker',
          'xrpusdt@ticker',
        ],
        id: 1,
      };

      ws.send(JSON.stringify(message));
      setIsLoading(false);
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.error) {
        setSocketError(message.error.msg);
        throw message.error.msg;
      }

      switch (message.s) {
        case 'BTCUSDT':
          setBTCUSDT(+message.o);
          break;
        case 'ETHUSDT':
          setETHUSDT(+message.o);
          break;
        case 'BNBUSDT':
          setBNBUSDT(+message.o);
          break;
        case 'EGLDUSDT':
          setEGLDUSDT(+message.o);
          break;
        case 'XRPUSDT':
          setXRPUSDT(+message.o);
          break;
      }
    };

    return () => {
      // Close the WebSocket connection when the component unmounts
      ws.close();
    };
  }, []);

  return {
    BTCUSDT,
    ETHUSDT,
    BNBUSDT,
    EGLDUSDT,
    XRPUSDT,
    socketError,
    isLoading,
  };
};

export default topCryptoHook;

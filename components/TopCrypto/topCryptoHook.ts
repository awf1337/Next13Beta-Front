import { useEffect, useState } from 'react';

interface CoinProps {
  currentPrice: number;
  lastPrice?: number;
  positivePriceChange: boolean;
  volumeUSDT: number;
}

const topCryptoHook = () => {
  const [BTCUSDT, setBTCUSDT] = useState<CoinProps>();
  const [ETHUSDT, setETHUSDT] = useState<CoinProps>();
  const [BNBUSDT, setBNBUSDT] = useState<CoinProps>();
  const [EGLDUSDT, setEGLDUSDT] = useState<CoinProps>();
  const [XRPUSDT, setXRPUSDT] = useState<CoinProps>();
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
          setBTCUSDT({
            currentPrice: +message.c,
            positivePriceChange: +message.o - +message.c >= 0 ? true : false,
            volumeUSDT: Math.floor(+message.v * +message.w),
          });
          break;
        case 'ETHUSDT':
          setETHUSDT({
            currentPrice: +message.c,
            positivePriceChange: +message.o - +message.c >= 0 ? true : false,
            volumeUSDT: Math.floor(+message.v * +message.w),
          });
          break;
        case 'BNBUSDT':
          setBNBUSDT({
            currentPrice: +message.c,
            positivePriceChange: +message.o - +message.c >= 0 ? true : false,
            volumeUSDT: Math.floor(+message.v * +message.w),
          });
          break;
        case 'EGLDUSDT':
          setEGLDUSDT({
            currentPrice: +message.c,
            positivePriceChange: +message.o - +message.c >= 0 ? true : false,
            volumeUSDT: Math.floor(+message.v * +message.w),
          });
          break;
        case 'XRPUSDT':
          setXRPUSDT({
            currentPrice: +message.c,
            positivePriceChange: +message.o - +message.c >= 0 ? true : false,
            volumeUSDT: Math.floor(+message.v * +message.w),
          });
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

/* 
WebSocket Payload
{
  "e": "24hrTicker",  // Event type
  "E": 123456789,     // Event time
  "s": "BNBBTC",      // Symbol
  "p": "0.0015",      // Price change
  "P": "250.00",      // Price change percent
  "w": "0.0018",      // Weighted average price
  "x": "0.0009",      // First trade(F)-1 price (first trade before the 24hr rolling window)
  "c": "0.0025",      // Last price
  "Q": "10",          // Last quantity
  "b": "0.0024",      // Best bid price
  "B": "10",          // Best bid quantity
  "a": "0.0026",      // Best ask price
  "A": "100",         // Best ask quantity
  "o": "0.0010",      // Open price
  "h": "0.0025",      // High price
  "l": "0.0010",      // Low price
  "v": "10000",       // Total traded base asset volume
  "q": "18",          // Total traded quote asset volume
  "O": 0,             // Statistics open time
  "C": 86400000,      // Statistics close time
  "F": 0,             // First trade ID
  "L": 18150,         // Last trade Id
  "n": 18151          // Total number of trades
}
*/

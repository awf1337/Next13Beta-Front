import BinanceLogoIcon from '../../public/icons/binanaceLogo';
import BinanceCoinIcon from '../../public/icons/binanceCoin';
import BTC from '../../public/icons/bitcoin';
import ElrondCoinIcon from '../../public/icons/elrondCoin';
import EthereumIcon from '../../public/icons/ethereum';
import RippleIcon from '../../public/icons/ripple';
import SmallCard from '../Cards/SmallCard';
import topCryptoHook from './topCryptoHook';

const TopCrypto = () => {
  const { BTCUSDT, ETHUSDT, BNBUSDT, EGLDUSDT, XRPUSDT, isLoading } =
    topCryptoHook();
  return (
    <div className="borderTopSpacing flex flex-col gap-10 border-x-4 border-b-4 pt-14 px-5 pb-5 rounded-3xl">
      <div className="absolute top-[-18px] left-[26%]">
        <BinanceLogoIcon width={140} height={40} />
      </div>
      <SmallCard
        color="blue"
        icon={<BTC />}
        volume={BTCUSDT && BTCUSDT.volumeUSDT}
        value={BTCUSDT && BTCUSDT.currentPrice}
        isLoading={isLoading}
        positivePrice={BTCUSDT && BTCUSDT.positivePriceChange}
      />
      <SmallCard
        color="blue"
        icon={<EthereumIcon />}
        volume={ETHUSDT && ETHUSDT.volumeUSDT}
        value={ETHUSDT && ETHUSDT.currentPrice}
        isLoading={isLoading}
        positivePrice={ETHUSDT && ETHUSDT.positivePriceChange}
      />
      <SmallCard
        color="blue"
        icon={<BinanceCoinIcon />}
        volume={BNBUSDT && BNBUSDT.volumeUSDT}
        value={BNBUSDT && BNBUSDT.currentPrice}
        isLoading={isLoading}
        positivePrice={BNBUSDT && BNBUSDT.positivePriceChange}
      />
      <SmallCard
        color="blue"
        icon={<RippleIcon />}
        volume={XRPUSDT && XRPUSDT.volumeUSDT}
        value={XRPUSDT && XRPUSDT.currentPrice}
        isLoading={isLoading}
        positivePrice={XRPUSDT && XRPUSDT.positivePriceChange}
      />
      <SmallCard
        color="blue"
        icon={<ElrondCoinIcon />}
        volume={EGLDUSDT && EGLDUSDT.volumeUSDT}
        value={EGLDUSDT && EGLDUSDT.currentPrice}
        isLoading={isLoading}
        positivePrice={EGLDUSDT && EGLDUSDT.positivePriceChange}
      />
    </div>
  );
};

export default TopCrypto;

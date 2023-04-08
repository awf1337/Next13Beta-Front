import BTC from '../../public/icons/bitcoin';
import SmallCard from '../Cards/SmallCard';
import topCryptoHook from './topCryptoHook';

const TopCrypto = () => {
  const { BTCUSDT, ETHUSDT, BNBUSDT, EGLDUSDT, XRPUSDT, isLoading } =
    topCryptoHook();
  return (
    <div className="flex flex-col gap-10">
      <SmallCard
        color="blue"
        icon={<BTC />}
        title="volume"
        value={BTCUSDT}
        isLoading={isLoading}
      />
      <SmallCard
        color="blue"
        icon={<BTC />}
        title="volume"
        value={ETHUSDT}
        isLoading={isLoading}
      />
      <SmallCard
        color="blue"
        icon={<BTC />}
        title="volume"
        value={BNBUSDT}
        isLoading={isLoading}
      />
      <SmallCard
        color="blue"
        icon={<BTC />}
        title="volume"
        value={XRPUSDT}
        isLoading={isLoading}
      />
      <SmallCard
        color="blue"
        icon={<BTC />}
        title="volume"
        value={EGLDUSDT}
        isLoading={isLoading}
      />
    </div>
  );
};

export default TopCrypto;

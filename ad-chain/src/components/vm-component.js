'use client';
import { useEffect, useMemo } from 'react';
import { useInitNear, Widget, EthersProviderContext } from 'near-social-vm';

import { useWallet } from '../wallets/wallet-selector';
import { useEthersProviderContext } from '../wallets/web3-wallet';
import { NetworkId } from '../config';

export default function Component({ src, props }) {
  const ethersContext = useEthersProviderContext();
  const { selector } = useWallet();
  const { initNear } = useInitNear();

  useEffect(() => {
    initNear && selector && initNear({ networkId: NetworkId, selector });
  }, [initNear, selector]);

  console.log('VMCOMP RENDER', src, props)

  const widget = useMemo(() => {
    return <Widget src={src} props={props} />
  }, []);

  return (
    <div>
      <EthersProviderContext.Provider value={ethersContext}>
        {widget}
      </EthersProviderContext.Provider>
    </div>
  );
}

import dynamic from 'next/dynamic';

import styles from './app.module.css';

const Component = dynamic(() => import('../components/vm-component'), { ssr: false });

const readCampaignComponentSrc = "manztech.testnet/widget/readCampaign";
const transactionMiddlewareComponentSrc = "manztech.testnet/widget/transactionMiddleware"

export default function HomePage() {

  return (
    <>
      <main className={styles.main}>

        <div className='row'>
          <div className="col-6">
            <Component src={readCampaignComponentSrc} props={{ managerAddress: "0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7" }} />
            <Component src={transactionMiddlewareComponentSrc} props={{ managerAddress: "0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7", target: "0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7" }} />
          </div>
        </div>
        <hr />
      </main>
    </>
  );
}
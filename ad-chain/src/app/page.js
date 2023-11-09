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
            <Component src={readCampaignComponentSrc} props={{ managerAddress: "0x7A5C4E6c39dD8C594Aca1De08A0733fe3c07B8C2" }} />
            <Component src={transactionMiddlewareComponentSrc} props={{ managerAddress: "0x7A5C4E6c39dD8C594Aca1De08A0733fe3c07B8C2", target: "0x7A5C4E6c39dD8C594Aca1De08A0733fe3c07B8C2" }} />
          </div>
        </div>
        <hr />
      </main>
    </>
  );
}
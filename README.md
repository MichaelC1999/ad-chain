
# Ad-Chain

**Live Demo:** [Ad-Chain Demo](https://ad-chain.vercel.app/dummy-dao)

**GitHub Repo:** [Ad-Chain GitHub Repository](https://github.com/MichaelC1999/ad-chain)

**Project Demo deployed on Aurora Testnet**

**Manager Contract:** [View on Aurora Explorer](https://explorer.testnet.aurora.dev/address/0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7)

**CampaignNFT Contract:** [View on Aurora Explorer](https://explorer.testnet.aurora.dev/address/0xa2BEC8b2F7Fa2b5CFcdBED6D2c192F1Cd80D9571)

**Testnet `readCampaign` Component:** [View on Aurora Explorer](https://manztech.testnet/widget/readCampaign)

**Testnet `transactionMiddleware` Component:** [View on Aurora Explorer](https://manztech.testnet/widget/transactionMiddleware)

## Introduction

**Ad-Chain: A Decentralized Digital Marketing Protocol**

The digital marketing industry is valued at $500 billion. As Web3 continues to evolve, the need for decentralized, scalable, and abuse-resistant marketing protocols remains. Ad-Chain leverages Near BOS to address this need by providing a fully decentralized platform for protocols to earn ad revenue and launch marketing campaigns.

**Key Features:**

1. Marketing campaigns are 100% on-chain.
2. dApp frontends can now monetize by showing ads in a BOS component.
3. The ad display component executes special verifications to prevent fake ad views.

## Components of Ad-Chain

**Ad-Chain comprises a smart contract protocol and a set of BOS components.**

### Manager Contract

The Manager contract is the central hub for the protocol. It allows protocols and DAOs to fund and manage their ad campaigns. DApps can register with this contract to earn ad spend and request ads for display.

### CampaignNFT Contract

The CampaignNFT contract is used by DAOs and other protocols to initiate marketing campaigns on-chain. An NFT is minted with metadata pointing to the ad image on IPFS.

**DAO Governance**

In production, the Ad-Chain protocol will be governed by a DAO. Community voting will enhance security and prevent abuse. Specific actions will require community scrutiny:

- Only dApps with a known reputation can display ads for revenue.
- Campaigns must adhere to community guidelines to prevent harmful content.
- DApps must be hosted as gateways, and ads are served in components.

## Frontend Integration

**To earn ad revenue, dApp frontends must integrate two primary components:**

1. **ReadCampaign Component**

   - Fetches campaign data from the Manager contract.
   - Reads the ad image URL from the campaign.
   - Performs verifications to ensure that the content was served on the frontend.

2. **TransactionMiddleware Component**

   - Collects and records ad view data on the smart contracts.
   - Asks the user to sign over a hash of the ad data to prove that the user actually saw the ads.
   - Facilitates the transaction for ad view data collection.

## Benefits of Using Near BOS

**Ad-Chain leverages Near BOS, becoming the first protocol to offer fully decentralized digital marketing.**

- It opens a market for projects that couldn't access traditional marketing platforms.
- Near BOS provides a modular, scam-resistant environment for seamless frontend integrations.
- It prevents dApps from collecting revenue for ads that were not actually shown.
- Transparency is ensured by allowing the public to verify the components on the blockchain.

## Future Enhancements and Incentives

**Ad-Chain has the potential for further expansion and adoption.**

Possible enhancements include:

- Improved smart contract interaction flow.
- Dynamic ad assignment.
- Wider ad component modifications.
- Easier frontend integration.

Mass adoption can be encouraged through the incentivization of protocols with Campaign credits. Additionally, component introspection and signatures could be integrated to make Ad-Chain marketing 100% fraud-resistant, enhancing the integrity of ad campaigns.

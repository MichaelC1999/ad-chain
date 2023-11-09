# Ad-Chain

Live demo: https://ad-chain.vercel.app/dummy-dao

Github Repo: https://github.com/MichaelC1999/ad-chain

Project Demo is deployed on Aurora Testnet

Manager Contract Example: 0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7

CampaignNFT Contract Example: 0xa2BEC8b2F7Fa2b5CFcdBED6D2c192F1Cd80D9571

## Ad-Chain: A Decentralized Digital Marketing Protocol
Digital Marketing is a thriving $500 billion dollar industry. With the growth of Web3 technologies, there's an increasing need for decentralized, scalable, and abuse-resistant marketing protocols. Ad-Chain addresses this need by providing a completely decentralized platform for protocols to earn ad revenue and launch marketing campaigns using Near BOS.

Key Features of Ad-Chain
Marketing Campaigns on the Blockchain: Ad-Chain ensures that marketing campaigns are 100% on-chain, making them transparent and resistant to manipulation.

Monetize dApp Frontends: dApp frontends can now monetize by showing ads in a BOS component, enabling additional revenue streams for decentralized applications.

Preventing Fake Ad Views: Ad-Chain's ad display component executes special verifications to prevent fake ad views, enhancing the integrity of ad campaigns.


Components of Ad-Chain
Ad-Chain is composed of a smart contract protocol and a set of BOS components.

Manager Contract
The Manager contract serves as the central hub for the protocol. Protocols and DAOs interact with this contract to fund and manage their ad campaigns. dApps can register with this contract to earn ad spend and request ads to display to users.

CampaignNFT Contract
The CampaignNFT contract is used by DAOs and other protocols to start new marketing campaigns on-chain. An NFT is minted with metadata pointing to the ad image on IPFS.

In future development, there will be a contract for dApps looking to earn revenue from displaying ads, which will have a structure similar to the CampaignNFT contract.

DAO Governance
In production, the Ad-Chain protocol will be governed by a DAO, leveraging community voting for greater security and abuse prevention. Certain actions will require community scrutiny:

Only dApps with a known reputation will be allowed to display ads for revenue.
Campaigns must adhere to community guidelines to prevent harmful content.
dApps must be hosted as a gateway, and ads are served in components.
Front End Integration
To earn ad revenue, dApp frontends must integrate two main components:

1. ReadCampaign Component
Fetches campaign data from the Manager contract.
Reads the ad image URL from the campaign.
Performs verifications to ensure that the content was served on the frontend.
2. TransactionMiddleware Component
Collects and records ad view data on the smart contracts.
Asks the user to sign over a hash of the ad data to prove that the user actually saw the ads.
Facilitates the transaction for ad view data collection.
Benefits of Using Near BOS
Ad-Chain leverages Near BOS, becoming the first protocol to offer fully decentralized digital marketing. This opens up a market for projects that were previously unable to access traditional marketing platforms. Near BOS provides a modular, scam-resistant environment for seamless frontend integrations, preventing dApps from collecting revenue for ads that were not actually shown. The public can also verify the components on the blockchain, ensuring transparency in ad display and calculations.

Future Enhancements and Incentives
Ad-Chain has the potential for further expansion and adoption. Possible enhancements include:

Improved smart contract interaction flow.
Dynamic ad assignment.
Wider ad component modifications.
Easier frontend integration.
Mass adoption can be encouraged through the incentivization of protocols with Campaign credits. Additionally, component introspection and signatures could be integrated to make Ad-Chain marketing 100% fraud-resistant, enhancing the integrity of ad campaigns.
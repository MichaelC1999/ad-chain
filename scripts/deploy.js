// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  // const man = await hre.ethers.deployContract("Manager", [], {});

  // await man.waitForDeployment();

  const Manager = await hre.ethers.getContractAt("Manager", "0x1c943207bF4Ae4098Fb21cc95Dae17C33Ae347b7")


  const campaignNFT = await Manager.campaignNFT()
  console.log("Manager: ", "campaign", campaignNFT)

  const Campaign = await hre.ethers.getContractAt("CampaignNFT", campaignNFT)
  // const Campaign = await hre.ethers.getContractAt("CampaignNFT", "0xe73bc5BD4763A3307AB5F8F126634b7E12E3dA9b")

  await Campaign.safeMint("0x1CA2b10c61D0d92f2096209385c6cB33E3691b5E", "https://i.imgur.com/CTfWg2A.jpg")
  await Campaign.safeMint("0x1CA2b10c61D0d92f2096209385c6cB33E3691b5E", "https://i.imgur.com/9M42oPt.png")
  // await Campaign.safeMint("0x1CA2b10c61D0d92f2096209385c6cB33E3691b5E")

  console.log(await Campaign.tokenCount())



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

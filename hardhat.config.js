require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: __dirname + '/.env' });


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "aurora",
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + process.env.INFURA_API_KEY,
      chainId: 11155111,
      accounts: [process.env.WALLET_PK]
    },
    aurora: {
      url: "https://testnet.aurora.dev",
      chainId: 1313161555,
      accounts: [process.env.WALLET_PK]
    }
  }
};

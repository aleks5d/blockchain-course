require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "newer gonna give you up";
const GOERLI_PRIVATE_KEY = "Never gonna let you down";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};

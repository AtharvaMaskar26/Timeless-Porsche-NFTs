require("dotenv").config();
require("@nomiclabs/hardhat-ethers")

/** @type import('hardhat/config').HardhatUserConfig */


const {API_URL, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: API, 
      accounts: PRIVATE_KEY
    },
  },
};

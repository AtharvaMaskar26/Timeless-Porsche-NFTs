require("dotenv").config();
require("@nomiclabs/hardhat-ethers")

/** @type import('hardhat/config').HardhatUserConfig */


const {API_URL, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/FBQ78kiKfOGxccYAmbj6z6-fnSKVz15S", 
      accounts: [`0xee6b0ecbc9bf2bed093081ce29815fe91138ba7a995e1f6a9fee05ea86cfdab9`]
    },
  },
};

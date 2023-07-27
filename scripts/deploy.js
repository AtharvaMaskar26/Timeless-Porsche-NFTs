async function main() {
    const MyNFT = await ethers.getContractFactory("NFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  //0x39626bCA4558896c3571F2e3Bc9444Fd8Bab6d69
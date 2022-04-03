
const hre = require("hardhat");

async function main() {

  const POSP = await hre.ethers.getContractFactory("POSP");
  const posp = await POSP.deploy();

  await posp.deployed();

  console.log("POSP deployed to:", posp.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

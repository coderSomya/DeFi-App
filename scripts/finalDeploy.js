const hre = require("hardhat");

async function main() {
    const [owner, from1, from2, from3] = await hre.ethers.getSigners();
    const defi = await hre.ethers.getContractFactory("defi");
    const contract = await defi.deploy();

    await contract.deployed();
    console.log(contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
  
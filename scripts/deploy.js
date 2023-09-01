const hre = require("hardhat");


async function getBalances(address){
  const balanceBigInt= await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
 }

 async function consoleBalances(addresses){
   let ct=0;
   for(const address of addresses){
    console.log(`Adresses ${ct} balance:`, await getBalances(address));
    ct++;
   }
 }

 async function consoleMemos(memos){
  for(const memo of memos){
    const timestamp = memo.timestamp;
    const name = memo.name;
    const from = memo.address;
    const message = memo.message;

    console.log("[", name, timestamp, from, message, "]");
  }
 }

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const defi = await hre.ethers.getContractFactory("defi");
  const contract = await defi.deploy();
  // console.log(contract);
  
  contract.deployed();
  console.log(contract.address);

  const addresses = [owner.address, from1.address, from2.address, from3.address];

  console.log("before transaction");
  consoleBalances(addresses);

  const amount = {value: hre.ethers.utils.parseEther("1")};
  await contract.connect(from1).send("test1", "test1", amount);
  await contract.connect(from2).send("test2", "test2", amount);
  await contract.connect(from3).send("test3", "test3", amount);
  consoleBalances(addresses);
  console.log("after transaction");
}


 

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

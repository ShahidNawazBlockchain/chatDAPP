// const hre = require("hardhat");

// async function main() {
//  await hre.run("compile");

//  // Get the ContractFactory for the ChatApp contract
//  const ChatApp = await hre.ethers.getContractFactory("ChatApp");

//  // Deploy the contract
//  const chatApp = await ChatApp.deploy();
//  console.log({chatApp})

// //  await chatApp.d();

//  console.log("ChatApp deployed to:", chatApp.address);
// }

// main()
//  .then(() => process.exit(0))
//  .catch((error) => {
//     console.error(error);
//     process.exit(1);
//  });

 const hre = require("hardhat");
async function main() {

  
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;
  const unlockTime = 1710193808;

   const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const ChatApp = await hre.ethers.deployContract("ChatApp");
  await ChatApp.deployed()

  console.log(
    `Chat App with ${hre.ethers.utils.formatEther(
      lockedAmount
    )} ETH and  timestamp ${unlockTime} deployed to ${ChatApp.address}`
  );


  console.log("verification process...")

  await run("verify:verify", {
    address: ChatApp.address,
    contract: "contracts/ChatApp.sol:ChatApp", 
    constructorArguments: [],
});
 
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


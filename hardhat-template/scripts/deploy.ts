


import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {

  const ChatApp: ContractFactory = await ethers.getContractFactory(
    'ChatApp',
  );
  const testToken: Contract = await ChatApp.deploy();
  await testToken.deployed();
  console.log('TestToken deployed to: ', testToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

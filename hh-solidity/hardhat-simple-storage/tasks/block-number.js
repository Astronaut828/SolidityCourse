const { task } = require("hardhat/config");

task("block-number", "Prints the current blocknumber").setAction(
  // anonymous function
  // const blockTask = async function() => {}
  // async function blockTask() {}
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);
  }
);

module.exports = {}
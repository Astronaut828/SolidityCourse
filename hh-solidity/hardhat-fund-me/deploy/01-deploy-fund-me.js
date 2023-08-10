// imports

// const helperConfig = require("../helper-hardhat-config")
// const networkConfig = helperConfig.networkConfig
const { networkConfig, developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")
const { verify } = require("../utils/verify")
require("dotenv").config()

// This is one way of deploying:
// async function deployFunc(hre) {
//     console.log("Hi!")
//     hre.getNamedAccounts
//     hre.deployments
// }
// module.exports.default = deployFunc

// This is a nearly identical way of deploying in one line:
// module.exports = async (hre) => {
//     const { getNamedAccounts, deployments } = hre
module.exports = async ({ getNamedAccounts, deployments }) => {
    // hre.getNamedAccounts
    // hre.deployments
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    //const ethUsdPriceFeed = networkConfig[chainId]["ethUsdPrideFeed"]
    let ethUsdPriceFeedAddress
    if (chainId == 31337) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }
    
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
        // we need to wait if on a live network so we can verify properly
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`FundMe deployed at ${fundMe.address}`)
    log("-------------------------------------------")

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(fundMe.address, [ethUsdPriceFeedAddress])
    }
}
module.exports.tags = ["all", "fundme"]

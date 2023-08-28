const { network, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

// const VRF_SUB_FUND_AMOUNT = ethers.parseEther("1") // 1 Ether, or 1e18 (10^18) Wei

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("--------------------------")
    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(dynamicSvgNft.address, args)
    }
}

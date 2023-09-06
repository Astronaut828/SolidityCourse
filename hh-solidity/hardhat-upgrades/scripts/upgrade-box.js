// manuall way
const { developmentChains, VERIFICATION_BLOCK_CONFIRMATIONS } = require("../helper-hardhat-config")
const { network, deployments, deployer } = require("hardhat")
const { verify } = require("../utils/verify")

async function main() {

    const boxProxyAdmin = await ethers.getContract("BoxProxyAdmin")
    const transparentProxy = await ethers.getContract("Box_Proxy")

    const proxyBoxV1 = await ethers.getContract("Box", transparentProxy.address)
    const versionV1 = await proxyBoxV1.version()
    console.log(versionV1.toString())

    const boxV2 = await ethers.getContract("BoxV2")
    const upgradeTx = await boxProxyAdmin.upgrade(transparentProxy.target, boxV2.target)
    await upgradeTx.wait(1)

    const proxyBoxV2 = await ethers.getContract("BoxV2", transparentProxy.target)
    const versionV2 = await proxyBoxV2.version()
    console.log(versionV2.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

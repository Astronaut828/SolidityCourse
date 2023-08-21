const { getNamedAccounts, ethers } = require("hardhat")
const AMOUNT = ethers.utils.parseEther("0.01")

async function getWeth() {
    const { deployer } = await getNamedAccounts()
    // call the "deposit" function on the weth contract
    // WE ALWAYS NEED / abi, contract address
    // 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 // Weth Toke Address / Mainnet
    // 0xfA0e305E0f46AB04f00ae6b5f4560d61a2183E00 // Weth Toke Address / Sepolia "11155111"
    const iWeth = await ethers.getContractAt(
        "IWeth",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        deployer
    )
    const txResponse = await iWeth.deposit({
        value: AMOUNT,
    })
    await txResponse.wait(1)
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)
}

module.exports = { getWeth, AMOUNT }

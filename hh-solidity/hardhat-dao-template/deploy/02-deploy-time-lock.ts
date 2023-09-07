import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import { MIN_DELAY } from "../helper-hardhat-config"

const deployTimeLock: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { getNamedAccounts, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    log("----------------------------------------------------")
    log("Deploying TimeLock ...")
    const args = [MIN_DELAY, [], [], deployer]
    const timeLock = await deploy("TimeLock", {
        from: deployer,
        args: args,
        log: true,
    })
    log(`Deployed TimeLock to address ${timeLock.address}`)
}

export default deployTimeLock

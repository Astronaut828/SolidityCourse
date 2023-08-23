// fulfillrandom words
const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { networkConfig, developmentChains } = require("../../helper-hardhat-config")

const value = "10000000000000000"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RandomIpfsNFT Unit Tests", function () {
          let randomIpfsNFt, deployer

          beforeEach(async () => {
              accounts = await ethers.getSigners()
              deployer = accounts[0]
              await deployments.fixture(["randomipfs", "mocks"])
              randomIpfsNFt = await ethers.getContract("RandomIpfsNFt")
          })

          describe("Constructor", () => {
              it("Initializes the NFT Correctly.", async () => {
                  const name = await randomIpfsNFt.name()
                  const symbol = await randomIpfsNFt.symbol()
                  const tokenCounter = await randomIpfsNFt.getTokenCounter()
                  assert.equal(name, "Random")
                  assert.equal(symbol, "RAN")
                  assert.equal(tokenCounter.toString(), "0")
              })
          })
      })

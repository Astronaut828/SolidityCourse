// fulfillrandom words
const { assert, expect } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { networkConfig, developmentChains } = require("../../helper-hardhat-config")

const value = "10000000000000000"

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("RandomIpfsNFT Unit Tests", function () {
          let randomIpfsNFT, deployer, vrfCoordinatorV2Mock

          beforeEach(async () => {
              accounts = await ethers.getSigners()
              deployer = accounts[0]
              await deployments.fixture(["randomipfs", "mocks"])
              randomIpfsNFT = await ethers.getContract("RandomIpfsNFt")
              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
          })

          describe("Constructor", () => {
              it("Initializes the NFT Correctly.", async () => {
                  const name = await randomIpfsNFT.name()
                  const symbol = await randomIpfsNFT.symbol()
                  const tokenCounter = await randomIpfsNFT.getTokenCounter()
                  assert.equal(name, "Random")
                  assert.equal(symbol, "RAN")
                  assert.equal(tokenCounter.toString(), "0")
              })
          })

          describe("requestNft", () => {
              it("fails if payment isnt't sent with the request", async () => {
                  await expect(randomIpfsNFT.requestNft()).to.be.revertedWith(
                      "RandomIpfsNft__NeedMoreETHSent",
                  )
              })
              it("reverts if payment is less then mint fee", async () => {
                  const notEnough = ethers.utils.parseEther("0.001")
                  await expect(randomIpfsNFT.requestNft({ value: notEnough })).to.be.revertedWith(
                      "RandomIpfsNft__NeedMoreETHSent",
                  )
              })
              it("emits event and fires randomwords function", async () => {
                  const mintFee = await randomIpfsNFT.getMintFee()
                  await expect(randomIpfsNFT.requestNft({ value: mintFee })).to.emit(
                      randomIpfsNFT,
                      "NftRequested",
                  )
              })
          })

          describe("fulfillRandomWords", () => {
              it("mints NFT after random number is returned", async function () {
                  it("mints NFT after random number is returned", async function () {
                      await new Promise(async (resolve, reject) => {
                          randomIpfsNFT.once("NftMinted", async () => {
                              try {
                                  const tokenUri = await randomIpfsNFT.tokenURI("0")
                                  const tokenCounter = await randomIpfsNFT.getTokenCounter()
                                  assert.equal(tokenUri.toString().includes("ipfs://"), true)
                                  assert.equal(tokenCounter.toString(), "1")
                                  resolve()
                              } catch (e) {
                                  console.log(e)
                                  reject(e)
                              }
                          })
                          try {
                              const fee = await randomIpfsNFT.getMintFee()
                              const requestNftResponse = await randomIpfsNFT.requestNft({
                                  value: fee.toString(),
                              })
                              const requestNftReceipt = await requestNftResponse.wait(1)
                              await vrfCoordinatorV2Mock.fulfillRandomWords(
                                  requestNftReceipt.events[1].args.requestId,
                                  randomIpfsNFT.address,
                              )
                          } catch (e) {
                              console.log(e)
                              reject(e)
                          }
                      })
                  })
              })
          })

          describe("getEditionFromModdedRng", () => {
            it("should return RARE_1 if moddedRng is < 10", async function () {
                const checkRarity = await randomIpfsNFT.getEditionFromModdedRng("9")
                assert.equal(0, checkRarity)
            })
            it("should return RARE_2 moddedRng is between 10 - 39", async function () {
                const checkRarity = await randomIpfsNFT.getEditionFromModdedRng("23")
                assert.equal(1, checkRarity)
            })
            it("should return RARE_3 moddedRng is between 40 - 99", async function () {
                const checkRarity = await randomIpfsNFT.getEditionFromModdedRng("71")
                assert.equal(2, checkRarity)
            })
            it("should revert if moddedRng is > 99", async function (){
                expect(randomIpfsNFT.getEditionFromModdedRng("100")).to.be.revertedWith(
                    "RandomIpfsNft__RangeOutOfBounds",
                )
            })
          })
      })

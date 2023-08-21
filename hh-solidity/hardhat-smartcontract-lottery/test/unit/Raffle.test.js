const { network, getNamedAccounts, deployments, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")
const { assert, expect } = require("chai")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Raffle Unit Test", function () {
          let raffle, vrfCoordinatorV2Mock, raffleEntranceFee, deployer, keepersUpdateInterval
          const chainId = network.config.chainId


          beforeEach(async () => {
              accounts = await ethers.getSigners() // could also do with getNamedAccounts
              deployer = (await getNamedAccounts()).deployer
              player = accounts[1]
              await deployments.fixture(["all"]) // Deploys modules with the tags "mocks" and "raffle"
              vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer) // Returns a new connection to the VRFCoordinatorV2Mock contract
              raffleContract = await ethers.getContract("Raffle", deployer) // Returns a new connection to the Raffle contract
              raffle = raffleContract.connect(player) // Returns a new instance of the Raffle contract connected to player
              raffleEntranceFee = await raffle.getEntranceFee()
              keepersUpdateInterval = await raffle.getInterval()
          })

          describe("constructor", function () {
              it("Initializes the raffle correctly", async function () {
                  // Ideally we make our tests have just 1 assert per "it"
                  const raffleState = await raffle.getRaffleState()
                  assert.equal(raffleState.toString(), "0")
                  assert.equal(
                      keepersUpdateInterval.toString(),
                      networkConfig[network.config.chainId]["keepersUpdateInterval"],
                  )
              })
          })

          describe("enterRaffle", function () {
              it("reverts when you dont pay enough", async function () {
                  await expect(raffle.enterRaffle()).to.be.reverted
              })
              it("records players when they enter", async function () {
                  await raffle.enterRaffle({ value: raffleEntranceFee })
                  const playerFromContract = await raffle.getPlayer(0)
                  assert.equal(playerFromContract, player.address)
              })
              it("emits event on enter", async function () {
                await expect(raffle.enterRaffle({ value: raffleEntranceFee })).to.emit(
                    raffle,
                    "RaffleEnter"
                )
              })
              it("doest allow entrance when raffle is calculating", async function () {
                  await raffle.enterRaffle({ value: raffleEntranceFee })
                  await network.provider.send("evm_increaseTime", [Number(keepersUpdateInterval) + 1])
                  await network.provider.send("evm_mine", [])
                  await raffle.performUpkeep("0x")
                  await expect(
                      raffle.enterRaffle({ value: raffleEntranceFee })).to.be.reverted
              })
          })
          describe("checkUpkeep", function () {
              it("returns false if people haven't sent and ETH", async function () {
                await network.provider.send("evm_increaseTime", [Number(keepersUpdateInterval) + 1])
                await network.provider.send("evm_mine", [])
                  const { upkeepNeeded } = await raffle.checkUpkeep.staticCall("0x")
                  assert(!upkeepNeeded)
              })
              it("returns false if raffle isnt open", async function () {
                  await raffle.enterRaffle({ value: raffleEntranceFee })
                  await network.provider.send("evm_increaseTime", [Number(keepersUpdateInterval) + 1])
                  await network.provider.send("evm_mine", [])
                  await raffle.performUpkeep(("0x"))
                  const raffleState = await raffle.getRaffleState()
                  const { upkeepNeeded } = await raffle.checkUpkeep.staticCall("0x")
                  assert.equal(raffleState.toString(), "1")
                  assert.equal(!upkeepNeeded)
              })
              it("returns false if enough time hasn't passed", async function () {
                  await raffle.enterRaffle({ value: raffleEntranceFee })
                  await network.provider.send("evm_increaseTime", [Number(keepersUpdateInterval) - 15])
                  await network.provider.send("evm_mine", [])
                  const { upkeepNeeded } = await raffle.checkUpkeep.staticCall("0x")
                  assert(!upkeepNeeded)
              })
              it("returns true if enough time has passed, has players, eth, and is open", async function () {
                  await raffle.enterRaffle({ value: raffleEntranceFee })
                  await network.provider.send("evm_increaseTime", [Number(keepersUpdateInterval) + 1])
                  await network.provider.send("evm_mine", [])
                  const { upkeepNeeded } = await raffle.checkUpkeep.staticCall("0x")
                  assert(upkeepNeeded)
              })
          })
          describe("performUpkeep", function () {
              it("it can only run if checkUpkeep is true", async function () {
                  await raffle.enterRaffle({ value: raffleEntranceFee })
                  await network.provider.send("evm_increaseTime", [Number(keepersUpdateInterval) + 1])
                  await network.provider.send("evm_mine", [])
                  assert(await raffle.performUpkeep(("0x")))
              })
              it("reverts is checkupkeep is false", async function () {
                  await expect(raffle.performUpkeep("0x")).to.be.reverted
              })
              it("updates the raffle state, emits an event, and calls the vrf coordinator", async function () {
                  await raffle.enterRaffle({ value: raffleEntranceFee })
                  await network.provider.send("evm_increaseTime", [Number(keepersUpdateInterval) + 1])
                  await network.provider.send("evm_mine", [])
                  const txResponse = await raffle.performUpkeep(("0x"))
                  const txReceipt = await txResponse.wait(1)
                  const requestId = txReceipt.events[1].args.requestedId
                  const raffleState = await raffle.getRaffleState()
                  assert(requestId > 0)
                  assert(raffleState.toString(), "1")
              })
          })
          describe("fulfillRandomWords", function () {
              beforeEach(async function () {
                  await raffle.enterRaffle({ value: raffleEntranceFee })
                  await network.provider.send("evm_increaseTime", [Number(keepersUpdateInterval) + 1])
                  await network.provider.send("evm_mine", [])
              })
              it("can only be calles after performUpkeep", async function () {
                  await expect(vrfCoordinatorV2Mock.fulfillRandomWords(0, raffle.target)).to.be
                      .reverted
                  await expect(vrfCoordinatorV2Mock.fulfillRandomWords(1, raffle.target)).to.be
                      .reverted
              })
          })
          // This test is too big...
          // This test simulates users entering the raffle and wraps the entire functionality of the raffle
          // inside a promise that will resolve if everything is successful.
          // An event listener for the WinnerPicked is set up
          // Mocks of chainlink keepers and vrf coordinator are used to kickoff this winnerPicked event
          // All the assertions are done once the WinnerPicked event is fired
          it("picks a winner, resets, and sends money", async () => {
              const additionalEntrances = 3 // to test
              const startingIndex = 2
              let startingBalance
              for (let i = startingIndex; i < startingIndex + additionalEntrances; i++) {
                  // i = 2; i < 5; i=i+1
                  raffle = raffleContract.connect(accounts[i]) // Returns a new instance of the Raffle contract connected to player
                  await raffle.enterRaffle({ value: raffleEntranceFee })
              }
              const startingTimeStamp = await raffle.getLatestTimeStamp() // stores starting timestamp (before we fire our event)

              // This will be more important for our staging tests...
              await new Promise(async (resolve, reject) => {
                  raffle.once("WinnerPicked", async () => {
                      // event listener for WinnerPicked
                      console.log("WinnerPicked event fired!")
                      // assert throws an error if it fails, so we need to wrap
                      // it in a try/catch so that the promise returns event
                      // if it fails.
                      try {
                          // Now lets get the ending values...
                          const recentWinner = await raffle.getRecentWinner()
                          const raffleState = await raffle.getRaffleState()
                          const winnerBalance = await accounts[2].getBalance()
                          const endingTimeStamp = await raffle.getLatestTimeStamp()
                          await expect(raffle.getPlayer(0)).to.be.reverted
                          // Comparisons to check if our ending values are correct:
                          assert.equal(recentWinner.toString(), accounts[2].address)
                          assert.equal(raffleState, 0)
                          assert.equal(
                              winnerBalance.toString(),
                              startingBalance +
                                  (
                                      raffleEntranceFee * additionalEntrances +
                                      raffleEntranceFee
                                  ).toString(),
                          )
                          assert(endingTimeStamp > startingTimeStamp)
                          resolve() // if try passes, resolves the promise
                      } catch (e) {
                          reject(e) // if try fails, rejects the promise
                      }
                  })

                  // kicking off the event by mocking the chainlink keepers and vrf coordinator
                  try {
                      const tx = await raffle.performUpkeep(("0x"))
                      const txReceipt = await tx.wait(1)
                      startingBalance = await accounts[2].getBalance()
                      await vrfCoordinatorV2Mock.fulfillRandomWords(
                        txReceipt.events[1].args.requestedId,
                        raffle.address
                      )
                  } catch (e) {
                      reject(e)
                  }
              })
          })
      })

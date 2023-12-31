const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

// describe("SimpleStorage", () => {});
describe("SimpleStorage", function () {
  let simpleStorageFactory;
  let simpleStorage;
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue);
    //expect(currentValue.toString()).to.equal(expectedValue);
  });

  // or it.only - to only run this test
  it("Should update when we call store", async function () {
    const expectedValue = "7";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1);

    const currentValue = await simpleStorage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Should work correctly with the people struct and array", async function () {
    const expectedPerson = "Peter";
    const expectedFavoriteNumber = "13";

    const addPersonResponse = await simpleStorage.addPerson(
      expectedPerson,
      expectedFavoriteNumber
    );
    await addPersonResponse.wait(1);
    const { favoriteNumber, name } = await simpleStorage.people(0);

    assert.equal(name, expectedPerson);
    assert.equal(favoriteNumber, expectedFavoriteNumber);
  });
});

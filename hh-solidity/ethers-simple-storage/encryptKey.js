// here we will encrypt the private key
const ethers = require("ethers"); //import packages first
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVAT_KEY);
  const encryptedJsonKey = await ethers.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVAT_KEY
  );
  fs.readFileSync("./.encryptedKey.json", encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

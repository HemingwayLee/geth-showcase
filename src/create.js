const fs = require('fs');
const Web3 = require('web3');
const rs = require('randomstring');

async function main() {
  const w3 = new Web3(`http://${process.env.ADDRESS}:${process.env.WEB_PORT}`);

  let entropy = rs.generate(32);
  const account = w3.eth.accounts.create(entropy);

  const filename = `${entropy}.json`;
  fs.writeFile(filename, JSON.stringify(account), function(err) {
    if (err) {
      console.log(err);
    }

    console.log("The account was saved into file ", filename);
  });
}

main();

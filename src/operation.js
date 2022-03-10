const Web3 = require('web3');

async function main() {
  const w3 = new Web3(`http://${process.env.ADDRESS}:${process.env.WEB_PORT}`);

  w3.eth.getBlockNumber().then(console.log);
  console.log(await w3.eth.getBlockNumber());

  w3.eth.getBalance('0xf1A22B5b9e32582dE94BE2A968cDc78307A0F00F').then(console.log);
}

main();


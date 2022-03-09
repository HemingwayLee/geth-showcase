const Web3 = require('web3');

async function main() {
  const w3 = new Web3(`http://${process.env.ADDRESS}:${process.env.PORT}`);

  w3.eth.getBlockNumber().then(console.log);
  console.log(await w3.eth.getBlockNumber());

  w3.eth.getBalance('0x0000000000000000000000000000000000000001').then(console.log);
}

main();


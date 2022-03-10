const Web3 = require('web3');

async function main() {
  const w3 = new Web3(`http://${process.env.ADDRESS}:${process.env.WEB_PORT}`);

  w3.eth.accounts.wallet.add("0xd74718fc8891bd58ccd2aa3e5933aadcc5f8a01e69996226c941f87ed016cda2");
  w3.eth.sendTransaction({
    from: "0xf1A22B5b9e32582dE94BE2A968cDc78307A0F00F", 
    to: '0x9b8ABe655f7fcE6d2CB9340780eFb1BAF451B20F', 
    value: w3.utils.toWei('1', 'ether'), 
    gasLimit: 21000, 
    gasPrice: 20000000000
  }, function (err, transactionHash) {
    if (err) { 
      console.log('err', err); 
    } else {
      console.log('transactionHash', transactionHash);
    }
  });
}

main();


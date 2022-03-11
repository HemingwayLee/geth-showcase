# geth-showcase
* it showcases eth private blockchain with `geth`
* containers
  * `app.dockerfile`: the app container which communicates with `geth.single.dockerfile` using `web3`
  * `geth.single.dockerfile`: the container which runs `geth`

## How to run
```
docker-compose build
docker-compose up
```

## Get into running `app.dockerfile` container
```
docker exec -it ${ID} /bin/bash
```

* Check if `geth` runs correctly using `jsonrpc` in `app.dockerfile` container
```
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":67}' http://10.5.0.10:8545
```

* Get balance using `jsonrpc` in `app.dockerfile` container
```
curl -X POST http://10.5.0.10:8545 -H "Content-Type: application/json"  --data '{ "jsonrpc": "2.0", "method": "eth_getBalance", "params": ["0x0000000000000000000000000000000000000001", "latest"], "id": 1 }'
```


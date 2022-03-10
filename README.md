# geth-showcase
* Check if geth runs correctly
```
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":67}' http://10.5.0.10:8545
```

* Get balance
```
curl -X POST http://10.5.0.10:8545 -H "Content-Type: application/json"  --data '{ "jsonrpc": "2.0", "method": "eth_getBalance", "params": ["0x0000000000000000000000000000000000000001", "latest"], "id": 1 }'
```


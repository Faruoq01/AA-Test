export const contractABI = [{"inputs":[{"internalType":"contract IEntryPoint","name":"_entryPoint","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"accountImplementation","outputs":[{"internalType":"contract SimpleAccount","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"salt","type":"uint256"}],"name":"createAccount","outputs":[{"internalType":"contract SimpleAccount","name":"ret","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"salt","type":"uint256"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
export const bundlerOptions = {
  method: 'POST',
  url: 'https://api.stackup.sh/v1/node/ce803e79baef331b56e610706a2c2cc0aa407782eff2739a8bdc059c93624804',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_sendUserOperation',
    params: [
      {
        sender: '0xF1b5b84FaF35725b43E7e34d32669E1964eB6BaF',
        nonce: '0x0',
        initCode: '0x',
        callData: '0x',
        callGasLimit: '0x0',
        verificationGasLimit: '0x0',
        preVerificationGas: '0x0',
        maxFeePerGas: '0x0',
        maxPriorityFeePerGas: '0x0',
        paymasterAndData: '0x',
        signature: '0x'
      },
      '0x9406Cc6185a346906296840746125a0E44976454'
    ]
  }
};
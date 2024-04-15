import { Injectable } from '@nestjs/common';
import { sendUserOperation } from './util';
import { ethers } from "ethers";
import { Presets, Client } from "userop";

const rpcUrl ="https://public.stackup.sh/api/v1/node/ethereum-sepolia";
const paymasterUrl = "https://api.stackup.sh/v1/paymaster/caa330f73ce5172bcaac04a6000633be956dfe1e40a414d0ce5a01c3074619de"; 

@Injectable()
export class AppService {
  async createAccount(): Promise<string> {
    const paymasterContext = { type: "payg" };
    const paymasterMiddleware = Presets.Middleware.verifyingPaymaster(
      paymasterUrl,
      paymasterContext
    );

    const opts = {
      paymasterMiddleware: paymasterMiddleware,
    }

    const signingKey = "0x4337433743374337433743374337433743374337433743374337433743374337";
    const signer = new ethers.Wallet(signingKey);
    var builder = await Presets.Builder.SimpleAccount.init(signer, rpcUrl, opts);
    const address = builder.getSender();
    console.log(`Account address: ${address}`);
    // sendUserOperation(rpcUrl, builder, signer);
    return address;
  }
}
   
import { ethers } from "ethers";
import { Client } from "userop";
import { ERC20_ABI } from './erc20Abi';
 
export const sendUserOperation = async(rpcUrl: string, builder: any, signer: any) => {
    // Create the call data
    const to = "0x90583F2C1A3b35552fCAc8DB672e064E4B58944A";
    const token = "0x3870419Ba2BBf0127060bCB37f69A1b1C090992B"; 
    const value = "0"; 

    // Read the ERC-20 token contract
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const erc20 = new ethers.Contract(token, ERC20_ABI, provider);
    const decimals = await Promise.all([erc20.decimals()]);
    const amount = ethers.utils.parseUnits(value, decimals);

    // Encode the calls
    const callTo = [token, token];
    const callData = [erc20.interface.encodeFunctionData("approve", [to, amount]),
    erc20.interface.encodeFunctionData("transfer", [to, amount])]

    // Send the User Operation to the ERC-4337 mempool
    const client = await Client.init(rpcUrl);
    const res = await client.sendUserOperation(builder.executeBatch(callTo, callData), {
        onBuild: (op) => console.log("Signed UserOperation:", op),
    });

    // Return receipt
    console.log(`UserOpHash: ${res.userOpHash}`);
    console.log("Waiting for transaction...");
    const ev = await res.wait();
    console.log(`Transaction hash: ${ev?.transactionHash ?? null}`);
    console.log(`View here: https://jiffyscan.xyz/userOpHash/${res.userOpHash}`);
}


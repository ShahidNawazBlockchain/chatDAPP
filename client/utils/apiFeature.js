import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { ChatappAddress,ChatAppABI } from "@/context/constants";

export const CheckIfWalletConnected=async()=>{
    try {
        if(!window.ethereum){
            return console.log("Install MetaMask");
        }
        const accunts = await window.ethereum.request({
            method:"eth_account",
        })
        const firstAccount=accunts[0];
        return firstAccount;
    } catch (error) {
        console.log(error)
    }
}

export const connectwallet=async()=>{
try {
    if(!window.ethereum){
        return "please install meta mask"
    }
    const accounts = await window.ethereum.request({
      method:"eth_requestAccounts"
    });
    const firstAccount=accounts[0];
    return firstAccount;
} catch (error) {
    console.log(error)
}
}
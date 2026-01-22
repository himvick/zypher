import { ethers } from "ethers";

const createEtherWallet = (): ethers.HDNodeWallet => {
  const wallet = ethers.Wallet.createRandom();
  return wallet;
};

export { createEtherWallet };

"use client";
import React, { useState, useEffect } from "react";
import { Alchemy, Network, AssetTransfersCategory } from "alchemy-sdk";
import DashboardHeader from "@/components/dashboardheader.tsx";
import { HDNodeWallet, Wallet } from "ethers";

const apiKey = "https://eth-mainnet.g.alchemy.com/v2/iGa8VUjryb9tyVVsXe4Gv";

const page = () => {
  useEffect(() => {
    const getTransactions = async () => {
      const password = localStorage.getItem("password");
      const storedEncryptedWallet = localStorage.getItem("encryptedWallet");
      if (password && storedEncryptedWallet) {
        Wallet.fromEncryptedJson(storedEncryptedWallet, password).then(
          (wallet) => {
            getTx(wallet.address);
          },
        );
      }
    };
    getTransactions();

    const getTx = async (address: string) => {
      const alchemy = new Alchemy({
        apiKey,
        network: Network.ETH_MAINNET,
      });
      const txs = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        toBlock: "latest",
        fromAddress: address,
        category: [
          AssetTransfersCategory.EXTERNAL,
          AssetTransfersCategory.INTERNAL,
          AssetTransfersCategory.ERC20,
          AssetTransfersCategory.ERC721,
          AssetTransfersCategory.ERC1155,
        ],
        withMetadata: true,
        excludeZeroValue: true,
      });
      console.log(txs);
    };
  }, []);
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader />
      <div>Activity Page</div>
    </div>
  );
};

export default page;

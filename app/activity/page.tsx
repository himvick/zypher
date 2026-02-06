"use client";
import React, { useState, useEffect } from "react";
import {
  Alchemy,
  Network,
  AssetTransfersCategory,
  AssetTransfersWithMetadataResult,
} from "alchemy-sdk";
import DashboardHeader from "@/components/dashboardheader.tsx";
import { HDNodeWallet, Wallet } from "ethers";
import TransactionCard from "@/components/transactioncard.tsx";

const apiKey = "iGa8VUjryb9tyVVsXe4Gv";

const page = () => {
  const [transactions, setTransactions] = useState<
    AssetTransfersWithMetadataResult[]
  >([]);
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
        fromAddress: "0x34383AeA39f8AC5E5Aa009100D5d62Cfb7389AfE",
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
      setTransactions(txs.transfers);
      console.log(txs.transfers);
    };
  }, []);
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader />
      <div>
        <p>Transaction History</p>
      </div>
      <div>
        {transactions.length > 0 && (
          <TransactionCard
            to={transactions[0].to}
            from={transactions[0].from}
            asset={transactions[0].asset}
            value={transactions[0].value}
            hash={transactions[0].hash}
            key={transactions[0].hash}
          />
        )}
      </div>
      <div>
        {transactions.map((transaction) => (
          <div key={transaction.hash}>
            <TransactionCard
              to={transaction.to}
              from={transaction.from}
              asset={transaction.asset}
              value={transaction.value}
              hash={transaction.hash}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

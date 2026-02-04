"use client";
import { HDNodeWallet, Wallet } from "ethers";
import React, { useEffect, useState } from "react";

interface Props {
  to: string;
  from: string;
  asset: string;
  value: number;
  id: string;
}

const TransactionCard = ({ to, from, asset, value, id }: Props) => {
  const [wallet, setWallet] = useState<HDNodeWallet>();
  useEffect(() => {
    const getTransactions = async () => {
      const password = localStorage.getItem("password");
      const storedEncryptedWallet = localStorage.getItem("encryptedWallet");
      if (password && storedEncryptedWallet) {
        Wallet.fromEncryptedJson(storedEncryptedWallet, password).then(
          (wallet) => {},
        );
      }
    };
    getTransactions();
  }, []);
  return <div></div>;
};

export default TransactionCard;

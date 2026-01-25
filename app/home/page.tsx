"use client";
import React, { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboardheader.tsx";
import Dashboard from "@/components/dashboard.tsx";
import { HDNodeWallet, Wallet, ethers } from "ethers";

const ALCHEMY_API_KEY =
  "https://eth-mainnet.g.alchemy.com/v2/iGa8VUjryb9tyVVsXe4Gv";

const page = () => {
  const [wallet, setWallet] = useState<HDNodeWallet | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const password = localStorage.getItem("password");
    const storedEncryptedWallet = localStorage.getItem("encryptedWallet");
    if (password && storedEncryptedWallet) {
      Wallet.fromEncryptedJson(storedEncryptedWallet, password).then(
        (wallet) => {
          setWallet(wallet as HDNodeWallet);
          getBalance(wallet.address);
        },
      );
    }
  }, []);

  const getBalance = async (address: ethers.AddressLike) => {
    const provider = new ethers.JsonRpcProvider(ALCHEMY_API_KEY);
    let ethBalance = await provider.getBalance(address);
    provider.on("block", async () => {
      ethBalance = await provider.getBalance(address);
      setBalance(parseFloat(ethers.formatEther(ethBalance)));
    });
    setBalance(parseFloat(ethers.formatEther(ethBalance)));
  };
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader />
      {wallet && <Dashboard balance={balance} address={wallet.address} />}
    </div>
  );
};

export default page;

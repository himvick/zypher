"use client";
import React, { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboardheader.tsx";
import Dashboard from "@/components/dashboard.tsx";
import TradeButtons from "@/components/tradebuttons.tsx";
import TokenList from "@/components/tokenlist.tsx";
import { HDNodeWallet, Wallet, ethers } from "ethers";

const ALCHEMY_API_KEY =
  "https://eth-mainnet.g.alchemy.com/v2/iGa8VUjryb9tyVVsXe4Gv";

const ETHERSCAN_API_KEY = `https://api.etherscan.io/v2/api?module=stats&action=ethprice&apikey=RQINA7EXJVU6YWPBWB6CIINX4MFXYXMS4Z&chainid=1`;

const page = () => {
  const [wallet, setWallet] = useState<HDNodeWallet | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [ethPrice, setEthPrice] = useState<number | null>(null);

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
    getEtherPrice();
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

  const getEtherPrice = async () => {
    try {
      const response = await fetch(ETHERSCAN_API_KEY);
      const data = await response.json();
      console.log(data.result.ethusd);
      setEthPrice(data.result.ethusd);
      return data.result.ethusd;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader />
      <div className="flex flex-col p-2">
        {wallet && (
          <Dashboard
            balance={balance}
            address={wallet.address}
            ethPrice={ethPrice}
          />
        )}
        <TradeButtons />
        {wallet && <TokenList address={wallet.address} />}
      </div>
    </div>
  );
};

export default page;

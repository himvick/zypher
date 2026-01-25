"use client";
import React, { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboardheader.tsx";
import { HDNodeWallet, Wallet } from "ethers";

const page = () => {
  const [wallet, setWallet] = useState<HDNodeWallet | null>(null);

  useEffect(() => {
    const password = localStorage.getItem("password");
    const storedEncryptedWallet = localStorage.getItem("encryptedWallet");
    if (password && storedEncryptedWallet) {
      Wallet.fromEncryptedJson(storedEncryptedWallet, password).then((wallet) =>
        setWallet(wallet as HDNodeWallet),
      );
    }
  }, []);
  return (
    <div className="flex flex-col w-full">
      <DashboardHeader />
      <div>Home Page</div>
    </div>
  );
};

export default page;

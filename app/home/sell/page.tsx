"use client";
import { HDNodeWallet, Wallet } from "ethers";
import React, { useEffect, useState } from "react";

const page = () => {
  const [wallet, setWallet] = useState<HDNodeWallet>();
  const [amount, setAmount] = useState<string>("0.00");
  useEffect(() => {
    const password = localStorage.getItem("password");
    const storedEncryptedWallet = localStorage.getItem("encryptedWallet");
    if (password && storedEncryptedWallet) {
      Wallet.fromEncryptedJson(storedEncryptedWallet, password).then(
        (wallet) => {
          setWallet(wallet as HDNodeWallet);
        },
      );
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-12 min-w-full">
      <div className="flex flex-col gap-5 rounded-2xl sm:border items-center p-4 w-100 max-md:min-w-full">
        <h2 className="text-4xl">Sell</h2>
        <hr className="w-full" />
        <div className="rounded-2xl border px-4 py-2">
          <p>
            {wallet?.address.slice(0, 7) + "..." + wallet?.address.slice(-4)}
          </p>
        </div>
        <div className="text-4xl flex flex-row flex-wrap items-center justify-center">
          <h1 className="">GHS</h1>
          <input
            type="text"
            value={amount}
            style={{ width: `${amount.length || 1}ch` }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
          />
        </div>
        <div>
          <p className="text-2xl">Ethereum</p>
        </div>
        <hr className="w-full" />
        <button className="rounded-2xl px-4 py-2 bg-blue-950 text-white text-2xl cursor-pointer active:bg-blue-900">
          Continue
        </button>
      </div>
    </div>
  );
};

export default page;

"use client";
import { HDNodeWallet, Wallet } from "ethers";
import React, { useEffect, useState } from "react";

const page = () => {
  const [wallet, setWallet] = useState<HDNodeWallet>();
  const [toAddress, setToAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
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
    <div className="h-lvh flex flex-col justify-center items-center gap-5">
      <h2 className="text-4xl">Send</h2>
      <div className="flex flex-col gap-4 w-full md:w-100 items-center border rounded-2xl p-4">
        <div className="flex flex-row items-center justify-between w-full">
          <p>From</p>
          <div className="rounded-2xl border p-2">
            <input
              type="text"
              className="focus:border-none focus:outline-none"
              value={
                wallet?.address.slice(0, 7) + "..." + wallet?.address.slice(-4)
              }
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <p>To</p>
          <input
            type="text"
            value={toAddress}
            className="border rounded-2xl p-2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setToAddress(e.target.value)
            }
          />
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <p>Amount</p>
          <input
            type="number"
            value={amount}
            className="border rounded-2xl p-2"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
          />
        </div>
        <div>
          <button className="rounded-2xl w-44 bg-blue-950 text-white px-4 py-2 cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

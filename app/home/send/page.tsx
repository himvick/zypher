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
    <div>
      <h2>Send</h2>
      <div>
        <div>
          <p>From</p>
          <div>
            <p>
              {wallet?.address.slice(0, 7) + "..." + wallet?.address.slice(-4)}
            </p>
          </div>
        </div>
        <div>
          <p>To</p>
          <input
            type="text"
            value={toAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setToAddress(e.target.value)
            }
          />
        </div>
        <div>
          <p>Amount</p>
          <input
            type="number"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value)
            }
          />
        </div>
        <div>Ethereum</div>
        <div>
          <button className="rounded-2xl bg-blue-950 text-white px-4 py-2">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

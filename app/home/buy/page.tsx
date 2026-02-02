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
  });

  const setInput = () => {};

  return (
    <div>
      <div>
        <h2>Buy</h2>
        <hr />
        <div>
          <p>
            {wallet?.address.slice(0, 7) + "..." + wallet?.address.slice(-4)}
          </p>
        </div>
        <div>
          <h1>GHS</h1>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default page;

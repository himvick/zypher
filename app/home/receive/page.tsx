"use client";
import { HDNodeWallet, Wallet } from "ethers";
import React, { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const page = () => {
  const [wallet, setWallet] = useState<HDNodeWallet>();
  const [buttonText, setButtonText] = useState<string>("Copy Address");
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
  const copyAddress = (data: string) => {
    setButtonText("Copied");
    navigator.clipboard.writeText(data);
  };
  return (
    <div>
      <div>
        <div>
          <p>{wallet?.address}</p>
        </div>
      </div>
      <div>
        {wallet && (
          <QRCodeCanvas
            value={wallet.address}
            size={200}
            bgColor="white"
            fgColor="black"
            level="H"
          />
        )}
      </div>
      {wallet && (
        <button
          className="rounded-2xl bg-blue-950 px-4 py-2 cursor-pointer text-white"
          onClick={() => copyAddress(wallet.address)}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default page;

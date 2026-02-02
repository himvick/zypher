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
    <div className="flex flex-col justify-center items-center gap-2 h-lvh">
      <h2 className="text-3xl">Receive</h2>
      <div className="border rounded-3xl flex flex-col p-4 gap-4 items-center">
        <div className="rounded-2xl p-2 border">
          <div>
            <p>
              {wallet?.address.slice(0, 7) + "..." + wallet?.address.slice(-4)}
            </p>
          </div>
        </div>
        <div>
          {wallet && (
            <QRCodeCanvas
              value={wallet.address}
              size={300}
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
    </div>
  );
};

export default page;

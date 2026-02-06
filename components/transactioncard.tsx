"use client";
import { HDNodeWallet, Wallet } from "ethers";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiSimCardFill, PiArrowDownLeftBold } from "react-icons/pi";

interface Props {
  to: string | null;
  from: string | null;
  asset: string | null;
  value: number | null;
  hash: string | null;
}

const TransactionCard = ({ to, from, asset, value, hash }: Props) => {
  const [wallet, setWallet] = useState<HDNodeWallet>();
  useEffect(() => {
    const getTransactions = async () => {
      const password = localStorage.getItem("password");
      const storedEncryptedWallet = localStorage.getItem("encryptedWallet");
      if (password && storedEncryptedWallet) {
        Wallet.fromEncryptedJson(storedEncryptedWallet, password).then((w) => {
          setWallet(w as HDNodeWallet);
          console.log(w);
        });
      }
    };
    getTransactions();
  }, []);
  return (
    <div className="w-full">
      {wallet && from == wallet.address ? (
        <div className="flex flex-row justify-around items-center">
          <div>
            <MdOutlineArrowOutward />
          </div>
          <div>
            <p>Transfer</p>
          </div>
          <div>
            <p>{asset}</p>
            <p>{value}</p>
          </div>
          <div>
            <span>
              <PiSimCardFill />
            </span>
            <p>{to?.slice(0, 7) + "..." + to?.slice(-4)}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-around items-center">
          <div className="text-white bg-black rounded-full p-1">
            <PiArrowDownLeftBold className="w-6 h-6" />
          </div>
          <div>
            <p>Transfer</p>
          </div>
          <div>
            <p>{asset}</p>
            <p>{value}</p>
          </div>
          <div>
            <span>
              <PiSimCardFill />
            </span>
            <p>{to?.slice(0, 7) + "..." + to?.slice(-4)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionCard;

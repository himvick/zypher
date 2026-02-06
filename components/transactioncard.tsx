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
  timestamp: string;
}

const TransactionCard = ({
  to,
  from,
  asset,
  value,
  hash,
  timestamp,
}: Props) => {
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

  const getDate = (time: string): string => {
    const date = new Date(time);
    return date.toDateString();
  };
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
        <div className="flex flex-row justify-around items-center border-b border-gray-600 p-2">
          <div className="text-white bg-black rounded-full p-1">
            <PiArrowDownLeftBold className="w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-gray-400">Transfer</p>
            <p>{getDate(timestamp)}</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{asset}</p>
            <p className="text-gray-500 font-bold">{value}</p>
          </div>
          <div className="flex flex-row items-center">
            <span>
              <PiSimCardFill className="w-6 h-6 text-amber-600" />
            </span>
            <p>{to?.slice(0, 7) + "..." + to?.slice(-4)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionCard;

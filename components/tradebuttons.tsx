import React from "react";
import Link from "next/link";
import { LuArrowDownLeft } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { IoMdSwap } from "react-icons/io";
import { MdArrowOutward, MdOutlineSell } from "react-icons/md";

const TradeButtons = () => {
  return (
    <div className="flex flex-row items-center gap-2 sm:gap-4 p-2 sm:p-4 w-full">
      <Link
        href="/home/buy"
        className="border border-gray-600 rounded-3xl p-2 sm:p-3 items-center hover:bg-gray-800 hover:text-white"
      >
        <FaPlus className="inline" />
        <p className="inline max-sm:text-sm">Buy</p>
      </Link>
      <Link
        href="/home/receive"
        className="border border-gray-600 rounded-3xl p-2 items-center hover:bg-gray-800 hover:text-white"
      >
        <LuArrowDownLeft className="inline" />
        <p className="inline max-sm:text-sm">Receive</p>
      </Link>
      <Link
        href="/home/swap"
        className="border border-gray-600 rounded-3xl p-2 items-center hover:bg-gray-800 hover:text-white"
      >
        <IoMdSwap className="inline" />
        <p className="inline max-sm:text-sm">Swap</p>
      </Link>
      <Link
        href="/home/send"
        className="border border-gray-600 rounded-3xl p-2 items-center hover:bg-gray-800 hover:text-white"
      >
        <MdArrowOutward className="inline" />
        <p className="inline max-sm:text-sm">Send</p>
      </Link>
      <Link
        href="/home/sell"
        className="border border-gray-600 rounded-3xl p-2 items-center hover:bg-gray-800 hover:text-white"
      >
        <MdOutlineSell className="inline" />
        <p className="inline max-sm:text-sm">Sell</p>
      </Link>
    </div>
  );
};

export default TradeButtons;

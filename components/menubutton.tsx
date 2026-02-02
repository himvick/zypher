"use client";
import React, { useState } from "react";
import Link from "next/link";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <div className="relative inline-block">
      <button
        className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          width={20}
          height={20}
          fill="white"
        >
          <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 flex flex-col">
          <Link href="/home">Home</Link>
          <Link href="/discover">Discover</Link>
          <Link href="/activity">Activity</Link>
          <hr className="my-2 border-t border-gray-300" />
          <Link href="/home/buy">Buy</Link>
          <Link href="/home/sell">Sell</Link>
          <Link href="/home/swap">Swap</Link>
          <Link href="/home/send">Send</Link>
          <Link href="/home/receive">Receive</Link>
          <hr className="my-2 border-t border-gray-300" />
          <Link href="/settings">Settings</Link>
          <Link href="/help">Help</Link>
        </div>
      )}
    </div>
  );
};

export default MenuButton;



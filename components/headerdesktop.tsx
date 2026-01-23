import React from "react";
import Link from "next/link";

const HeaderDesktop = () => {
  return (
    <div className="flex flex-col w-full p-6 bg-gray-100 h-lvh sticky">
      <div className="text-2xl font-bold mb-8">Zypher</div>
      <div className="flex flex-col space-y-2">
        <Link
          href="/discover"
          className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Discover
        </Link>
        <Link
          href="/activity"
          className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Activity
        </Link>
        <Link
          href="/move"
          className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Move Crypto
        </Link>
      </div>
    </div>
  );
};

export default HeaderDesktop;

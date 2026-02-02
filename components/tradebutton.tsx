"use client";
import React, { useState } from "react";
import Link from "next/link";

const TradeButton = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 w-full py-2 flex flex-row gap-2 justify-between bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        <div className="flex flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 640 640"
          >
            <path d="M544 72C544 58.7 533.3 48 520 48L418.2 48C404.9 48 394.2 58.7 394.2 72C394.2 85.3 404.9 96 418.2 96L462.1 96L350.8 207.3L255.7 125.8C246.7 118.1 233.5 118.1 224.5 125.8L112.5 221.8C102.4 230.4 101.3 245.6 109.9 255.6C118.5 265.6 133.7 266.8 143.7 258.2L240.1 175.6L336.5 258.2C346 266.4 360.2 265.8 369.1 256.9L496.1 129.9L496.1 173.8C496.1 187.1 506.8 197.8 520.1 197.8C533.4 197.8 544.1 187.1 544.1 173.8L544 72zM112 320C85.5 320 64 341.5 64 368L64 528C64 554.5 85.5 576 112 576L528 576C554.5 576 576 554.5 576 528L576 368C576 341.5 554.5 320 528 320L112 320zM159.3 376C155.9 396.1 140.1 412 119.9 415.4C115.5 416.1 111.9 412.5 111.9 408.1L111.9 376.1C111.9 371.7 115.5 368.1 119.9 368.1L151.9 368.1C156.3 368.1 160 371.7 159.2 376.1zM159.3 520.1C160 524.5 156.4 528.1 152 528.1L120 528.1C115.6 528.1 112 524.5 112 520.1L112 488.1C112 483.7 115.6 480 120 480.8C140.1 484.2 156 500 159.4 520.2zM520 480.7C524.4 480 528 483.6 528 488L528 520C528 524.4 524.4 528 520 528L488 528C483.6 528 479.9 524.4 480.7 520C484.1 499.9 499.9 484 520.1 480.6zM480.7 376C480 371.6 483.6 368 488 368L520 368C524.4 368 528 371.6 528 376L528 408C528 412.4 524.4 416.1 520 415.3C499.9 411.9 484 396.1 480.6 375.9zM256 448C256 412.7 284.7 384 320 384C355.3 384 384 412.7 384 448C384 483.3 355.3 512 320 512C284.7 512 256 483.3 256 448z" />
          </svg>
          <span>Trade</span>
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={25}
            width={25}
            viewBox="0 0 640 640"
          >
            <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 p-2 bg-gray-200 rounded-lg">
          <Link
            href="/home/buy"
            className="block px-2 py-1 hover:bg-gray-300 rounded"
          >
            Buy
          </Link>
          <Link
            href="/home/sell"
            className="block px-2 py-1 hover:bg-gray-300 rounded"
          >
            Sell
          </Link>
          <Link
            href="/home/swap"
            className="block px-2 py-1 hover:bg-gray-300 rounded"
          >
            Swap
          </Link>
          <Link
            href="/home/send"
            className="block px-2 py-1 hover:bg-gray-300 rounded"
          >
            Send
          </Link>
          <Link
            href="/home/receive"
            className="block px-2 py-1 hover:bg-gray-300 rounded"
          >
            Receive
          </Link>
        </div>
      )}
    </div>
  );
};

export default TradeButton;

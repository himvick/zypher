import React from "react";
import Link from "next/link";
import TradeButton from "./tradebutton";

const HeaderDesktop = () => {
  return (
    <div className="flex flex-col w-44 left-0 p-4 bg-gray-100 h-lvh fixed">
      <div className="text-2xl font-bold mb-8">Zypher</div>
      <div className="flex flex-col space-y-2">
        <Link
          href="/home"
          className="px-3 py-2 flex flex-row gap-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 640 640"
            >
              <path d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z" />
            </svg>
          </span>
          <span>Home</span>
        </Link>
        <Link
          href="/discover"
          className="px-3 py-2 flex flex-row gap-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 640 640"
          >
            <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM370.7 389.1L226.4 444.6C207 452.1 187.9 433 195.4 413.6L250.9 269.3C254.2 260.8 260.8 254.2 269.3 250.9L413.6 195.4C433 187.9 452.1 207 444.6 226.4L389.1 370.7C385.9 379.2 379.2 385.8 370.7 389.1zM352 320C352 302.3 337.7 288 320 288C302.3 288 288 302.3 288 320C288 337.7 302.3 352 320 352C337.7 352 352 337.7 352 320z" />
          </svg>
          <span>Discover</span>
        </Link>
        <TradeButton />
        <Link
          href="/activity"
          className="px-3 py-2 flex flex-row gap-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 640 640"
          >
            <path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
          </svg>
          <span>Activity</span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderDesktop;

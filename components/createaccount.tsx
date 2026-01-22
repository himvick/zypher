"use client";
import React from "react";
import { useState } from "react";

interface Props {
  createNewWallet: () => void;
}

const CreateAccount = ({ createNewWallet }: Props) => {
  const [isOpened, setIsOpened] = useState<Boolean>(false);
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-950 text-white rounded-2xl w-60 cursor-pointer"
        onClick={() => {
          createNewWallet();
          setIsOpened(true);
        }}
      >
        Create New Wallet
      </button>
      {isOpened && (
        <div className="flex w-full h-full items-center justify-center fixed top-0 left-0 bg-black/50">
          <div className="flex flex-col  gap-2 rounded-3xl p-4 bg-white items-center w-[500]">
            <div className="w-full flex flex-row justify-end">
              <button
                className="text-white cursor-pointer bg-red-700 rounded-full w-7 h-7 font-bold"
                onClick={() => setIsOpened(false)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccount;

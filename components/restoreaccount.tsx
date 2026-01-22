"use client";
import React, { useState } from "react";

const RestoreAccount = () => {
  const [isOpened, setIsOpened] = useState<Boolean>(false);
  const [phrase, setPhrase] = useState<string>("");
  return (
    <div>
      <button
        onClick={() => setIsOpened(true)}
        className="w-60 px-4 py-2 bg-amber-600 text-white rounded-2xl cursor-pointer"
      >
        Restore With Seed Phrase
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
            <h3>Enter your seed phrase</h3>
            <h4>Add a space between each word</h4>
            <input
              type="text"
              value={phrase}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhrase(e.target.value)
              }
              placeholder="Enter your seed phrase in ascending order"
              className="rounded-2xl border border-black p-2 w-5/6"
            />
            <button className="bg-blue-950 rounded-2xl px-4 py-2 text-white cursor-pointer">
              Restore Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestoreAccount;

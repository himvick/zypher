"use client";
import React, { useState } from "react";

const RestoreAccount = () => {
  const [isOpened, setIsOpened] = useState<Boolean>(false);
  const [phrase, setPhrase] = useState<string>("");
  return (
    <div>
      <button className="w-60 px-4 py-2 bg-amber-600 text-white rounded-2xl cursor-pointer">
        Restore With Seed Phrase
      </button>
      {isOpened && (
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex rounded p-1 bg-white border-2 border-black">
            <h3>Enter your seed phrase. Add a space between each word.</h3>
            <input
              type="text"
              value={phrase}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhrase(e.target.value)
              }
              placeholder="Enter your seed phrase in ascending order"
            />
            <button>Restore Account</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestoreAccount;

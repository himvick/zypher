"use client";
import { HDNodeWallet } from "ethers";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  createNewWallet: (password: string) => HDNodeWallet;
  password: string;
}

const CreateAccount = ({ createNewWallet, password }: Props) => {
  const [isOpened, setIsOpened] = useState<Boolean>(false);
  const [mnemonic, setMnemonic] = useState<string[]>([]);

  const router = useRouter();

  const createWallet = () => {
    if (password.length < 8) {
      return alert("Password must be at least 8 characters long");
    }
    const wallet = createNewWallet(password);
    const phrase = wallet?.mnemonic?.phrase.split(" ");
    setMnemonic(phrase || []);
    setIsOpened(true);
  };

  const goHome = () => {
    setIsOpened(false);
    router.push("/home");
  };
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-950 text-white rounded-2xl w-60 cursor-pointer"
        onClick={createWallet}
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
            <h3>Your Seed Phrase</h3>
            <div className="flex flex-wrap justify-center gap-2 rounded-2xl border border-black p-4">
              {mnemonic.map((word, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                  {index + 1}. {word}
                </span>
              ))}
            </div>
            <div className="text-red-600">
              <h4>
                Please save this phrase securely. It is essential for account
                recovery. Without your seed phrase, you may lose access to your
                account.
              </h4>{" "}
            </div>
            <div>
              <button
                className="px-4 py-2 bg-blue-950 text-white rounded-2xl w-60 cursor-pointer"
                onClick={goHome}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateAccount;

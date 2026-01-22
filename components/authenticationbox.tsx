"use client";
import React, { useState } from "react";
import RestoreAccount from "./restoreaccount.tsx";
import CreateAccount from "./createaccount.tsx";
import { createEtherWallet } from "../public/utils.tsx";
import { HDNodeWallet } from "ethers";

interface SignupProps {
  createNewWallet: (password: string) => HDNodeWallet;
}

const Signup: React.FC<SignupProps> = ({ createNewWallet }) => {
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <div className="flex flex-col gap-2 p-0.5">
        <input
          className="rounded-2xl border border-black p-2"
          placeholder="Create New Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <CreateAccount createNewWallet={createNewWallet} password={password} />
        <RestoreAccount />
      </div>
    </div>
  );
};

interface LoginProps {
  loginWallet: (password: string) => void;
}

const Login: React.FC<LoginProps> = ({ loginWallet }) => {
  const [loginPassword, setLoginPassword] = useState<string>("");
  return (
    <div className="flex flex-col gap-2 p-0.5">
      <input
        type="password"
        value={loginPassword}
        className="border border-gray rounded-2xl p-2 w-60"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLoginPassword(e.target.value)
        }
        placeholder="Password"
      />
      <button
        className="bg-blue-950 rounded-2xl px-4 py-2 text-white cursor-pointer"
        onClick={() => loginWallet(loginPassword)}
      >
        Login
      </button>
    </div>
  );
};

const AuthenticationBox = () => {
  const [signup, setSignup] = useState<boolean>(false);

  const createNewWallet = (password: string): HDNodeWallet => {
    const wallet = createEtherWallet();
    wallet.encrypt(password).then((json) => {
      localStorage.setItem("encryptedWallet", json);
      localStorage.setItem("password", password);
    });
    return wallet;
  };

  const loginWallet = (password: string) => {};
  return (
    <div className="flex flex-col gap-5 border-black p-10 pt-2 border-2 rounded-2xl">
      <div className="flex flex-row justify-around gap-1">
        <button className="cursor-pointer" onClick={() => setSignup(false)}>
          Login
        </button>
        <button className="cursor-pointer" onClick={() => setSignup(true)}>
          Signup
        </button>
      </div>
      {signup ? (
        <Signup createNewWallet={createNewWallet} />
      ) : (
        <Login loginWallet={loginWallet} />
      )}
    </div>
  );
};

export default AuthenticationBox;

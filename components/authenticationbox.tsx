"use client";
import React, { useState } from "react";
import RestoreAccount from "./restoreaccount.tsx";

interface SignupProps {
  createNewWallet: () => void;
}

const Signup: React.FC<SignupProps> = ({ createNewWallet }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 p-0.5">
        <button
          className="px-4 py-2 bg-blue-950 text-white rounded-2xl w-60 cursor-pointer"
          onClick={createNewWallet}
        >
          Create New Wallet
        </button>
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

  const createNewWallet = () => {};

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

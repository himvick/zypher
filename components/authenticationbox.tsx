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
        <button onClick={createNewWallet}>Create New Wallet</button>
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLoginPassword(e.target.value)
        }
        placeholder="Password"
      />
      <button onClick={() => loginWallet(loginPassword)}>Login</button>
    </div>
  );
};

const AuthenticationBox = () => {
  const [signup, setSignup] = useState<boolean>(false);

  const createNewWallet = () => {};

  const loginWallet = (password: string) => {};
  return (
    <div className="border-black border-2 rounded-2xl">
      <div className="flex flex-row gap-1">
        <button>Login</button>
        <button>Signup</button>
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

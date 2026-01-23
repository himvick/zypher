"use client";
import React, { useState } from "react";
import RestoreAccount from "./restoreaccount.tsx";
import CreateAccount from "./createaccount.tsx";
import { createEtherWallet } from "../public/utils.tsx";
import { HDNodeWallet, Wallet } from "ethers";
import { useRouter } from "next/navigation";

interface SignupProps {
  createNewWallet: (password: string) => HDNodeWallet;
  restoreWallet: (seedPhrase: string, password: string) => HDNodeWallet;
}

const Signup: React.FC<SignupProps> = ({ createNewWallet, restoreWallet }) => {
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <div className="flex flex-col w-72 gap-2 p-0.5">
        <input
          className="rounded-2xl border border-black w-full p-2"
          placeholder="Create New Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <CreateAccount createNewWallet={createNewWallet} password={password} />
        <RestoreAccount restoreWallet={restoreWallet} />
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
    <div className="flex flex-col gap-2 w-72 p-0.5">
      <input
        type="password"
        value={loginPassword}
        className="border border-gray rounded-2xl p-2 w-full"
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
  const router = useRouter();

  const createNewWallet = (password: string): HDNodeWallet => {
    const wallet = createEtherWallet();
    wallet.encrypt(password).then((json) => {
      localStorage.setItem("encryptedWallet", json);
      localStorage.setItem("password", password);
    });
    return wallet;
  };

  const restoreWallet = (
    seedPhrase: string,
    password: string,
  ): HDNodeWallet => {
    const wallet = Wallet.fromPhrase(seedPhrase);
    wallet.encrypt(password).then((json) => {
      localStorage.setItem("encryptedWallet", json);
      localStorage.setItem("password", password);
    });
    return wallet;
  };

  const loginWallet = (password: string) => {
    const storedPassword = localStorage.getItem("password") || "";
    if (password === storedPassword) {
      router.push("/home");
    } else {
      alert("Incorrect password");
      return;
    }
  };
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
        <Signup
          createNewWallet={createNewWallet}
          restoreWallet={restoreWallet}
        />
      ) : (
        <Login loginWallet={loginWallet} />
      )}
    </div>
  );
};

export default AuthenticationBox;

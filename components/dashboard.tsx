import React from "react";
import CopyButton from "./copybutton.tsx";

interface Props {
  balance: number | null;
  address: string;
  ethPrice: number | null;
}

const Dashboard = ({ balance, address, ethPrice }: Props) => {
  return (
    <div className="p-2">
      <CopyButton text="Sample text to copy to clipboard" />
      <h1 className="text-4xl font-bold mt-4">
        {balance !== null && ethPrice !== null
          ? `$${Number(balance * ethPrice).toFixed(2)}`
          : "Loading..."}
      </h1>
    </div>
  );
};

export default Dashboard;

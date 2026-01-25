import React from "react";
import CopyButton from "./copybutton.tsx";

interface Props {
  balance: number | null;
  address: string;
}

const Dashboard = ({ balance, address }: Props) => {
  return (
    <div>
      <CopyButton text="Sample text to copy to clipboard" />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;

import React from "react";

interface Props {
  decimals: number;
  logo: string;
  name: string;
  symbol: string;
  address: string;
}

const TokenCard = (props: Props) => {
  return (
    <div className="flex flex-row p-1 justify-between">
      <div></div>
    </div>
  );
};

export default TokenCard;

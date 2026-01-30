import React from "react";
import { formatUnits } from "ethers";

interface Props {
  decimals: number;
  logo: string;
  name: string;
  symbol: string;
  address: string;
  balance: string;
}

const TokenCard = (props: Props) => {
  return (
    <div className="flex flex-row p-2 justify-between md:w-150 items-center border border-gray-200 rounded-lg">
      <div className="flex flex-row gap-10">
        <div>
          <img src={props.logo} alt={props.symbol} className="w-8 h-8" />
        </div>
        <div className="flex flex-col ml-2">
          <div className="font-bold">{props.symbol}</div>
          <div className="text-sm text-gray-500">{props.name}</div>
        </div>
      </div>
      <div>
        {`${formatUnits(BigInt(props.balance), props.decimals).slice(0, 6)} ${props.symbol}`}
      </div>
    </div>
  );
};

export default TokenCard;

import React, { useEffect, useState } from "react";

const ALCHEMY_API_URL =
  "https://eth-mainnet.g.alchemy.com/v2/iGa8VUjryb9tyVVsXe4Gv";

interface Props {
  address: string;
}

const TokenList = ({ address }: Props) => {
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const res = await fetch(ALCHEMY_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "alchemy_getTokenBalances",
            params: [address, "DEFAULT_TOKENS"],
          }),
        });
        const data = await res.json();
        let tokenAddresses = data.result.tokenBalances
          .filter((token: any) => token.tokenBalance != 0)
          .map((token: any) => token.contractAddress);
        console.log(tokenAddresses);
      } catch (error) {}
    };
    fetchTokens();
  }, []);
  return <div></div>;
};

export default TokenList;

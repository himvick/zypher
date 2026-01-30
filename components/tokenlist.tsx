"use client";
import React, { useEffect, useState } from "react";

const ALCHEMY_API_URL =
  "https://eth-mainnet.g.alchemy.com/v2/iGa8VUjryb9tyVVsXe4Gv";

interface Props {
  address: string;
}

const TokenList = ({ address }: Props) => {
  const [tokens, setTokens] = useState<any[]>([]);
  useEffect(() => {
    const fetchTokens = async () => {
      console.log("fetching tokens");
      let allTokens = [];
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
        let tokenAddresses = data.result.tokenBalances.filter(
          (token: any) => token.tokenBalance != 0,
        );
        for (let i = 0; i < tokenAddresses.length; i++) {
          const result = await fetch(ALCHEMY_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              jsonrpc: "2.0",
              id: 1,
              method: "alchemy_getTokenMetadata",
              params: [tokenAddresses[i].contractAddress],
            }),
          });
          const dat = await result.json();
          allTokens.push({
            ...dat.result,
            address: tokenAddresses[i].contractAddress,
            balance: tokenAddresses[i].tokenBalance,
          });
        }
        console.log("finished fetching tokens");

        localStorage.setItem("allTokens", JSON.stringify(allTokens));
        setTokens(allTokens);
      } catch (error) {
        console.error("Error getting tokens: ", error);
      }
    };
    if (JSON.parse(localStorage.getItem("allTokens") as string)?.length == 0) {
      fetchTokens();
    }
    console.log(JSON.parse(localStorage.getItem("allTokens") as string));
  }, []);
  return <div></div>;
};

export default TokenList;

import React from "react";
import CoinContext from "../Context/CoinContext";
import { useContext } from "react";

function CoinStats({ coin }) {
  const { formatNumber } = useContext(CoinContext);
  return (
    <div className="px-20 w-1/2">
      <div>
        <h2 className="font-bold text-3xl text-blue-900">Value Statistics</h2>
        <p className="my-3 text-md text-blue-900">
          An overview showing the statistics of {coin.name}, such as the base
          and quote currency, the rank, and trading volume.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table ">
          <tbody className="text-blue-900 text-md">
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium">Price to USD</td>
              <td className="font-bold">${Number(coin.price).toFixed(2)}</td>
            </tr>
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium">Price to BTC</td>
              <td className="font-bold">
                {Number(coin.btcPrice).toFixed(6)} BTC
              </td>
            </tr>
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium">Coin Rank</td>
              <td className="font-bold">{coin.rank}</td>
            </tr>
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium">24h volume</td>
              <td className="font-bold">
                $ {formatNumber(Number(coin["24hVolume"]))}
              </td>
            </tr>
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium">Market Cap</td>
              <td className="font-bold">
                $ {formatNumber(Number(coin.marketCap))}
              </td>
            </tr>
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium">All-time high</td>
              <td className="font-bold">
                $ {Number(coin.allTimeHigh?.price).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoinStats;

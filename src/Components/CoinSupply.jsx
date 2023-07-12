import React from "react";
import { useContext } from "react";
import CoinContext from "../Context/CoinContext";
function CoinSupply({ coin }) {
  const { formatNumber } = useContext(CoinContext);
  const ratio = (
    (Number(coin.supply?.circulating) / Number(coin.supply?.total)) *
    100
  ).toFixed(2);
  return (
    <div className="px-20 w-1/2">
      <div>
        <h2 className="font-bold text-3xl text-blue-900">Supply information</h2>
        <p className="my-3 text-md text-blue-900">
          View the total and circulating supply of {coin.name}, including
          details on how the supplies are calculated.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table ">
          <tbody className="text-blue-900 text-md">
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium"></td>
              <td className="font-bold">
                <div
                  className="radial-progress text-blue-900 font-bold mb-10"
                  style={{ "--value": ratio }}
                >
                  {ratio}%
                </div>
              </td>
            </tr>
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium">Total Supply</td>
              <td className="font-bold">
                ${formatNumber(Number(coin.supply?.total)) + " "}
                {coin.symbol}
              </td>
            </tr>
            <tr className=" flex justify-between border-b border-blue-100">
              <td className="font-medium">Circulating Supply</td>
              <td className="font-bold">
                ${formatNumber(Number(coin.supply?.circulating)) + " "}
                {coin.symbol}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoinSupply;

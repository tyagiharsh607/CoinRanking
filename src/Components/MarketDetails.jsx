import React from "react";
import { useContext } from "react";
import CoinContext from "../Context/CoinContext";

function MarketDetails() {
  const { stats, coins, formatNumber } = useContext(CoinContext);

  return (
    <div className="w-1/2 px-40 py-20">
      <h1 className="text-3xl font-bold text-blue-900">
        Cryptocurrency price list
      </h1>
      <p className="text-gray-600">
        All cryptocurrencies ranked by market cap.
      </p>

      <div className="flex mt-8">
        <div className="flex-1 border-r border-gray-300 pr-4">
          <h2 className="text-sm font-normal text-blue-900 mb-2 whitespace-nowrap">
            Market Cap
          </h2>
          <div className="flex justify-between">
            <span className="text-base font-bold text-blue-900">
              $
              {stats.totalMarketCap &&
                formatNumber(Number(stats.totalMarketCap))}
              {/* {stats.totalMarketCap} */}
            </span>
          </div>
        </div>

        <div className="flex-1 border-r border-gray-300 pr-4 pl-4">
          <h2 className="text-sm font-normal text-blue-900 mb-2 whitespace-nowrap">
            Gainers vs Losers
          </h2>
          <div className="flex justify-between">
            <span className="text-base font-bold text-blue-900">+10%</span>
          </div>
        </div>

        <div className="flex-1 border-r border-gray-300 pr-4 pl-4">
          <h2 className="text-sm font-normal text-blue-900 mb-2 whitespace-nowrap">
            Trading Volume
          </h2>
          <div className="flex justify-between">
            <span className="text-base font-bold text-blue-900">
              $ {formatNumber(Number(stats.total24hVolume))}
            </span>
          </div>
        </div>

        <div className="flex-1 border-r border-gray-300 pr-4 pl-4">
          <h2 className="text-sm font-normal text-blue-900 mb-2 whitespace-nowrap">
            BTC Dominance
          </h2>
          <div className="flex justify-between">
            {stats.totalMarketCap && (
              <span className="text-base font-bold text-blue-900">
                {(
                  (Number(coins[0].marketCap) / Number(stats.totalMarketCap)) *
                  100
                ).toFixed(2)}{" "}
                %
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 pl-4">
          <h2 className="text-sm font-normal text-blue-900 mb-2 whitespace-nowrap">
            All Coins
          </h2>
          <div className="flex justify-between">
            <span className="text-base font-bold text-blue-900">
              {stats.totalCoins}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketDetails;

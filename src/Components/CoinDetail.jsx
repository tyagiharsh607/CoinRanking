import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CoinContext from "../Context/CoinContext";
import { useState } from "react";
import CoinChart from "./CoinChart";
function CoinDetail({ coin }) {
  const { formatNumber, favorites, setFavorites, setCoins } =
    useContext(CoinContext);

  const makeFavorite = () => {
    if (favorites.includes(coin)) {
      console.log("coin in favorites already");
      setFavorites((prev) => {
        return prev.filter((favCoin) => coin != favCoin);
      });
    } else {
      console.log("coin not in favorites");

      setFavorites((prev) => {
        return [...prev, coin];
      });
    }
  };

  return (
    <div
      id={coin.uuid}
      className="flex  font-bold items-center justify-between px-10 py-4 border-b border-gray-300 p-5 cursor-pointer hover:scale-105 transition-transform"
    >
      <div onClick={makeFavorite}>
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: favorites.includes(coin) ? "red" : "black" }}
        />

        <span className=" px-2 w-16">{coin.rank}</span>
      </div>
      <Link to={`/coin/${coin.uuid}`}>
        <div className="flex flex-column items-center justify-between hover:shadow-lg">
          <img
            src={coin.iconUrl}
            alt={coin.name}
            className="w-8 h-8 mr-2 inline-block"
          />
          <div>
            <span className="w-32 block">{coin.name}</span>
            <span className="font-normal">{coin.symbol}</span>
          </div>
        </div>
      </Link>

      <span className="w-24">$ {Number(coin.price).toFixed(2)}</span>
      <span className="w-28">${formatNumber(Number(coin.marketCap))}</span>
      <div>
        <span
          className={`w-20 ${
            Number(coin.change) < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {Number(coin.change) < 0 ? `${coin.change}%` : `+${coin.change}%`}
        </span>
        <span>
          <CoinChart
            coinData={coin.sparkline}
            coinChange={Number(coin.change)}
            width={"80px"}
            height={"40px"}
            pointR={0}
            tTip={false}
            yAxis={false}
          />
        </span>
      </div>
    </div>
  );
}

export default CoinDetail;

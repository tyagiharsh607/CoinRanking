import React from "react";

function CoinHeader({ coin }) {
  return (
    <div className="border-b  px-20 py-10 flex items-center text-blue-900">
      <img
        src={coin.iconUrl}
        alt={coin.name}
        className="w-8 h-8 mr-4 inline-block"
      />
      <span className="block font-bold text-xl">{coin.name}</span>
      <span className="font-normal ml-2 text-sm">{coin.symbol}</span>

      <div className="border border-gray-400 p-1 ml-4 text-xs rounded-sm w-6 h-4 flex items-center justify-center">{`#${coin.rank}`}</div>
      <div className="ml-4 mr-2 font-bold text-xl">
        ${Number(coin.price).toFixed(2)}
      </div>
    </div>
  );
}

export default CoinHeader;

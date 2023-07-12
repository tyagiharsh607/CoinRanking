import React from "react";
import { useContext } from "react";
import CoinContext from "../Context/CoinContext";
import CoinsDetail from "../Components/CoinsDetail";
import MarketDetails from "../Components/MarketDetails";

function Favorites() {
  const { favorites } = useContext(CoinContext);
  return (
    <div>
      <MarketDetails />
      <CoinsDetail coins={favorites} />
    </div>
  );
}

export default Favorites;

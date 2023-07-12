import React from "react";
import CoinContext from "../Context/CoinContext";
import { useContext } from "react";
import CoinsDetail from "../Components/CoinsDetail";
import MarketDetails from "../Components/MarketDetails";
import Loader from "../Components/Loader";

function Home() {
  const { coins, loading, setLoading } = useContext(CoinContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MarketDetails />
          <CoinsDetail coins={coins} />
        </div>
      )}
    </>
  );
}

export default Home;

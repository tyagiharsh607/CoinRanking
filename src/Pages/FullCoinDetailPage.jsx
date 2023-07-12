import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinHeader from "../Components/CoinHeader";
import CoinChart from "../Components/CoinChart";
import { useContext } from "react";
import CoinContext from "../Context/CoinContext";
import Loader from "../Components/Loader";
import CoinStats from "../Components/CoinStats";
import CoinSupply from "../Components/CoinSupply";

function FullCoinDetailPage() {
  const { loading, setLoading } = useContext(CoinContext);
  const { uuid } = useParams();
  const [coin, setCoin] = useState({});
  const arr = Array.from(
    { length: 24 },
    () => Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000
  );
  useEffect(() => {
    const getCoin = async () => {
      setLoading(true);
      const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5060670760msha1a255ebae18240p1efcbajsn069ea9cdc13c",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setCoin(result.data.coin);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    getCoin();
  }, [uuid]);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  // finding lowest, average and highest values
  const numericData = coin?.sparkline?.map((value) => parseFloat(value)) || [];
  const sum = numericData.reduce((acc, num) => acc + num, 0);
  const average = (sum / numericData.length).toFixed(2);
  const highest = Math.max(...numericData).toFixed(2);
  const lowest = Math.min(...numericData).toFixed(2);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <CoinHeader coin={coin} />
          <div className="px-20 py-5 text-blue-900">
            <span className="font-bold mr-4">Description</span>
            <span className="">{coin.description}</span>
          </div>
          <div>
            <div className="border-b px-20 p-4 text-blue-900">
              <div className="flex justify-between  w-1/2">
                <p className="text-md font-bold mb-2 inline">Price Chart</p>
                <p className="text-sm">24h</p>
                <p
                  className={`text-sm font-bold ${
                    coin.change > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {coin.change}%
                </p>

                <div className="flex">
                  <p className="text-sm">Low</p>
                  <p className="text-sm font-bold ml-2">$ {lowest}</p>
                </div>
                <div className="flex">
                  <p className="text-sm">Average</p>
                  <p className="text-sm font-bold ml-2">$ {average}</p>
                </div>
                <div className="flex">
                  <p className="text-sm">High</p>
                  <p className="text-sm font-bold ml-2">$ {highest}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-8 flex align-center justify-center">
            {coin.sparkline && (
              <CoinChart
                coinData={coin.sparkline}
                coinChange={coin.change}
                width={"95vw"}
                height={"400px"}
                pointR={1}
                tTip={true}
                yAxis={true}
              />
            )}
          </div>
          <div className="flex pb-20">
            <CoinStats coin={coin} />
            <CoinSupply coin={coin} />
          </div>
        </div>
      )}
    </>
  );
}

export default FullCoinDetailPage;

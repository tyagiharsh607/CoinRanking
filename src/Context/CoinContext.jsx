// import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";

const CoinContext = createContext();

export const CoinContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [stats, setStats] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetchCoins();
  }, []);

  const fetchCoins = async () => {
    setLoading(true);
    const url =
      "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5060670760msha1a255ebae18240p1efcbajsn069ea9cdc13c",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setCoins(result.data.coins);
      setStats(result.data.stats);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  function formatNumber(number) {
    const suffixes = [
      "",
      "thousand",
      "million",
      "billion",
      "trillion",
      "quadrillion",
      "quintillion",
    ];
    let suffixIndex = 0;

    while (number >= 1000) {
      number /= 1000;
      suffixIndex++;
    }

    const formattedNumber = number.toFixed(2);
    const suffix = suffixes[suffixIndex];

    return `${formattedNumber} ${suffix}`;
  }

  return (
    <CoinContext.Provider
      value={{
        coins,
        stats,
        favorites,
        loading,
        theme,
        setTheme,
        setLoading,
        setFavorites,
        formatNumber,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContext;

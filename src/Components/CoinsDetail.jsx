import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CoinDetail from "../Components/CoinDetail";

function CoinsDetail({ coins }) {
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 25;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  return (
    <>
      <div className="p-10 ">
        <div className="flex  font-normal items-center justify-between px-10 py-4 border-b border-gray-300">
          <span>Rank</span>
          <span className="w-32 block">All Coins</span>
          <span className="w-24 ">Price</span>
          <span className="w-28">Market Cap</span>
          <span className="w-20">24h</span>
        </div>

        {/* Render the current coins */}
        {currentCoins.map((coin) => (
          <CoinDetail key={coin.id} id={coin.uuid} coin={coin} />
        ))}

        {/* Render pagination */}
        <div className="flex justify-center mt-4">
          <button
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-blue-800 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-900"
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <span className="text-white">&lt;</span>
          </button>

          {Array.from(
            { length: Math.ceil(coins.length / coinsPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                className={`mx-1 px-2 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-900 text-white"
                    : "bg-white hover:bg-gray-400"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}

          <button
            className={`mx-1 px-3 py-1 rounded-md ${
              currentPage === Math.ceil(coins.length / coinsPerPage)
                ? "bg-blue-800 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-900"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(coins.length / coinsPerPage)}
          >
            <span className="text-white">&gt;</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default CoinsDetail;

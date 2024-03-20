import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

const CryptoTable = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coincap.io/v2/assets",
          {
            params: {
              limit: 10,
            },
          }
        );
        setCryptoData(response.data.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  useEffect(() => {
    if (selectedCoin) {
      const fetchHistoricalData = async () => {
        try {
          const response = await axios.get(
            `https://api.coincap.io/v2/assets/${selectedCoin.id}/history?interval=d1`
          );

          const timestamps = response.data.data.map((entry) => entry.time);
          const prices = response.data.data.map((entry) => entry.priceUsd);

          const ctx = document.getElementById("chart");
          const chartWidth = 700;
          const chartHeight = 600;

          new Chart(ctx, {
            type: "line",
            data: {
              labels: timestamps,
              datasets: [
                {
                  label: `${selectedCoin.name} Price (USD)`,
                  data: prices,
                  borderColor: "green",
                  fill: false,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  type: "linear",
                  position: "bottom",
                },
                y: {
                  min: 0,
                },
              },
              responsive: false,
              maintainAspectRatio: false,
              width: chartWidth,
              height: chartHeight,
            },
          });
        } catch (error) {
          console.error("Error fetching historical data:", error);
        }
      };

      fetchHistoricalData();
    }
  }, [selectedCoin]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCoinClick = (coin) => {
    setSelectedCoin(coin);
  };

  return (
    <div>
      <div className="hidden sm:flex flex-col p-4">
        <h2 className="text-3xl font-bold mb-4">Real-time Cryptocurrency Data</h2>

        <input
          type="text"
          placeholder="Search Coin..."
          className="w-full p-2 mb-4 rounded-md border"
          value={searchQuery}
          onChange={handleSearch}
        />

        <table className="w-full border-collapse border bg-gray-300 border-gray-300">
          <thead>
            <tr className="bg-gray-500">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Symbol</th>
              <th className="p-3 text-left">Price (USD)</th>
              <th className="p-3 text-left">Market Cap (USD)</th>
              <th className="p-3 text-left">24h Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto) => (
              <tr
                key={crypto.id}
                className="hover:bg-gray-400 rounded-md bg-black cursor-pointer"
                onClick={() => handleCoinClick(crypto)}
              >
                <td className="p-2">{crypto.name}</td>
                <td className="p-2">{crypto.symbol}</td>
                <td className="p-3">${parseFloat(crypto.priceUsd).toFixed(2)}</td>
                <td className="p-3">${parseFloat(crypto.marketCapUsd).toLocaleString()}</td>
                <td
                  className={`p-3 ${
                    crypto.changePercent24Hr > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedCoin && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-black p-4 rounded-md shadow-md">
              <h3 className="text-lg font-bold mb-2">{selectedCoin.name}</h3>
              <p className="text-gray-600 mb-2">{selectedCoin.symbol}</p>
              <div className="flex flex-row w-[800px] h-[300px]">
                <canvas id="chart"></canvas>
              </div>
              <button
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700"
                onClick={() => setSelectedCoin(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* for mobile */}
      <div className="flex sm:hidden p-2">
        <h2 className="text-3xl font-bold mb-4">Real-time Cryptocurrency Data</h2>

        <input
          type="text"
          placeholder="Search Coin..."
          className="w-full p-2 mb-4 rounded-md border"
          value={searchQuery}
          onChange={handleSearch}
        />

        <table>
          <thead>
            <tr className="bg-gray-500">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Symbol</th>
              <th className="p-3 text-left">Price (USD)</th>
              <th className="p-3 text-left">Market Cap (USD)</th>
              <th className="p-3 text-left">24h Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto) => (
              <tr
                key={crypto.id}
                className="hover:bg-gray-400 rounded-md bg-black cursor-pointer"
                onClick={() => handleCoinClick(crypto)}
              >
                <td className="p-3">{crypto.name}</td>
                <td className="p-3">{crypto.symbol}</td>
                <td className="p-3">${parseFloat(crypto.priceUsd).toFixed(2)}</td>
                <td className="p-3">${parseFloat(crypto.marketCapUsd).toLocaleString()}</td>
                <td
                  className={`p-3 ${
                    crypto.changePercent24Hr > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedCoin && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-black p-4 rounded-md shadow-md">
              <h3 className="text-lg font-bold mb-2">{selectedCoin.name}</h3>
              <p className="text-gray-600 mb-2">{selectedCoin.symbol}</p>
              <div className="flex flex-row w-[800px] h-[300px]">
                <canvas id="chart"></canvas>
              </div>
              <button
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700"
                onClick={() => setSelectedCoin(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoTable;

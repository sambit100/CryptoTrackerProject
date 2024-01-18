import React, { useState, useEffect } from "react";
import axios from "axios";

const Feature1 = () => {
  const [topCryptos, setTopCryptos] = useState([]);

  useEffect(() => {
    const fetchTopCryptos = async () => {
      try {
        const response = await axios.get(
          "https://api.coinranking.com/v2/coins?orderBy=marketCap&limit=10"
        );
        setTopCryptos(response.data.data.coins);
      } catch (error) {
        console.error("Error fetching top cryptocurrencies:", error);
      }
    };

    fetchTopCryptos();
  }, []);

  return (
    <div className=" container mx-auto m-10 p-5">
      <h2 className="text-3xl font-bold mb-4">Top Cryptocurrencies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topCryptos.map((crypto) => (
          <div
            key={crypto.id}
            className="bg-sky-600 p-4 rounded-lg shadow-md transition transform hover:scale-105"
          >
            <img
              src={crypto.iconUrl}
              alt={crypto.name}
              className="mx-auto mb-4"
              style={{ maxWidth: "50px" }}
            />
            <h3 className="text-lg font-bold mb-2">{crypto.name}</h3>
            <p className="text-black">{crypto.symbol}</p>
            <p className="text-2xl font-semibold mt-2">${crypto.price}</p>
            <p
              className={`mt-2 ${
                crypto.change && crypto.change > 0
                  ? "text-green"
                  : "text-red"
              }`}
            >
              {crypto.change && crypto.change > 0 ? "+" : ""}
              {crypto.change && crypto.change.toFixed ? crypto.change.toFixed(2) : ""}
              {crypto.change && crypto.change.toFixed ? "%" : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature1;

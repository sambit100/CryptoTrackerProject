import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoNews = () => {
  const [cryptoNews, setCryptoNews] = useState([]);
  const [displayCount, setDisplayCount] = useState(10);

  useEffect(() => {
    const fetchCryptoNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything",
          {
            params: {
              q: "crypto",
              apiKey: "1848fbb7fd6d46b5955cfc0150675494",
            },
          }
        );
        setCryptoNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching cryptocurrency news:", error);
      }
    };

    fetchCryptoNews();
  }, []);

  const showMore = () => {
    setDisplayCount(displayCount + 10);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Cryptocurrency News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cryptoNews.slice(0, displayCount).map((news) => (
          <div
            key={news.url}
            className="bg-dark p-6 rounded-lg shadow-md transition transform hover:scale-105"
          >
            <img
              src={news.urlToImage}
              alt={news.title}
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2">{news.title}</h3>
            <p className="text-white">{news.source.name}</p>
            <p className="text-sm text-white mt-2">{news.publishedAt}</p>
            <p className="text-white mt-2">{news.description}</p>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      {cryptoNews.length > displayCount && (
        <button
          className="bg-blue-500 text-white mx-30 py-2  rounded-md mt-4"
          onClick={showMore}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default CryptoNews;

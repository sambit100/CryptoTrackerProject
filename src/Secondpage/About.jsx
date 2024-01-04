

import React from 'react';

const About= () => {
  return (
    <div className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">About Cryptoview</h2>
    <p className="text-lg mb-8 mx-auto max-w-2xl text-center">
      Welcome to Cryptoview, your go-to platform for tracking cryptocurrency prices and market trends! We understand the importance of staying informed in the fast-paced world of cryptocurrencies, and our web app is designed to provide you with real-time data and insights.
    </p>
  
    <div className="mb-12 mt-10">
      <h3 className="text-3xl font-bold mb-6 text-center text-orange-500">Key Features</h3>
      <ul className="list-disc text-lg mx-auto max-w-2xl">
        <li className="mb-2">Real-Time Price Tracking: Stay updated with the latest prices of popular cryptocurrencies.</li>
        <li className="mb-2">User-Friendly Interface: Our intuitive design makes it easy for both beginners and experienced users to navigate the app effortlessly.</li>
        <li className="mb-2">Comprehensive Market Data: Access detailed information about market capitalization, trading volume, and more for each cryptocurrency.</li>
        <li className="mb-2">Customizable Watchlist: Personalize your experience by creating a watchlist of your favorite cryptocurrencies for quick access.</li>
        <li>News and Updates: Stay informed with the latest news and developments in the cryptocurrency space.</li>
      </ul>
    </div>
  
    <div>
      <h3 className="text-3xl font-bold mb-6 text-center text-orange-500">How to Use Cryptoview</h3>
      <ol className="list-decimal list-inside text-lg mx-auto max-w-2xl">
        <li className="mb-2">Explore Cryptocurrencies: Browse through a vast list of cryptocurrencies to find the ones that interest you.</li>
        <li className="mb-2">Create a Watchlist: Sign up to create a personalized watchlist and track your favorite cryptocurrencies.</li>
        <li>Stay Informed: Check real-time prices, market data, and news to make informed decisions.</li>
      </ol>
    </div>
  
    <p className="mt-8 text-center">
      Cryptoview is committed to providing a seamless and informative experience for crypto enthusiasts. If you have any feedback or suggestions, feel free to <a href="#contact" className="text-blue-500">contact us</a> – we'd love to hear from you!
    </p>
  
    <p className="mt-6 text-center">Happy tracking, <br /> The Cryptoview Team</p>
  </div>
  
  );
};

export default About;

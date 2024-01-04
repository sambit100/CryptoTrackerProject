import React from "react";

const Feature2 = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">The Importance of Cryptocurrency</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Financial Inclusion</h3>
          <p>
            Cryptocurrencies provide financial services to the unbanked and
            underbanked populations, fostering greater financial inclusion
            globally.
          </p>
        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Decentralization</h3>
          <p>
            Cryptocurrencies operate on decentralized networks, reducing
            dependence on traditional banking systems and enhancing security.
          </p>
        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Global Transactions</h3>
          <p>
            Cryptocurrencies enable fast and cost-effective cross-border
            transactions, eliminating the need for intermediaries and reducing
            transaction times.
          </p>
        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Innovation in Finance</h3>
          <p>
            Blockchain technology, the foundation of cryptocurrencies, drives
            innovation in various financial sectors, including smart contracts,
            decentralized finance (DeFi), and more.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Security and Anonymity</h3>
          <p>
            Cryptocurrencies use cryptographic techniques to secure transactions,
            providing a high level of security and, in some cases, ensuring
            user privacy and anonymity.
          </p>
        </div>

        <div className=" p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Investment Opportunities</h3>
          <p>
            Cryptocurrencies offer new investment opportunities, attracting
            investors seeking diversification and potential high returns in a
            rapidly evolving digital asset market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature2;

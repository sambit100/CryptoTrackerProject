

import React from 'react';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';
import pic4 from '../assets/images/pic4.jpg';
import pic6 from '../assets/images/pic6.jpg';
import pic7 from '../assets/images/pic7.jpg';

const Products = () => {
  
  const products = [
    {
      id: 1,
      name: 'Bitcoin (BTC)',
      description: 'The original cryptocurrency.',
      price: '$60,000',
      image: pic2,
    },
    {
      id: 2,
      name: 'Ethereum (ETH)',
      description: 'A decentralized platform for smart contracts.',
      price: '$3,000',
      image: pic3,  
    },
    {
      id: 3,
      name: 'Cardano (ADA)',
      description: 'A blockchain platform for the development of decentralized applications.',
      price: '$2.00',
      image: pic4,  
    },
    {
      id: 4,
      name: 'Binance Coin (BNB)',
      description: 'The native cryptocurrency of the Binance exchange.',
      price: '$400',
      image: pic6, 
    },
   
    {
      id: 5,
      name: 'Polkadot (DOT)',
      description: 'A multi-chain blockchain platform.',
      price: '$40',
      image: pic7,  
    },
  ];

  
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Explore Cryptocurrencies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-md shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 rounded-md w-full h-32 object-cover"
            />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

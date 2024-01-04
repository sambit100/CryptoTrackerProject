

import React from 'react';

const Carrier = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Join Our Team</h2>

      <div className="max-w-2xl mx-auto">
        <p className="text-lg mb-6 text-center">
          We are always looking for passionate and talented individuals to join our team. If you are enthusiastic about cryptocurrencies and want to contribute to our mission, explore the opportunities below.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Current Openings</h3>
          <ul className="list-disc pl-6">
            <li className="mb-2">Blockchain Developer</li>
            <li className="mb-2">UI/UX Designer</li>
            <li className="mb-2">Digital Marketing Specialist</li>
            
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">How to Apply</h3>
          <p className="mb-2">
            If you are interested in any of the above positions, please send your resume and cover letter to:
          </p>
          <p className="mb-2">
            <a href="mailto:careers@yourwebsite.com" className="text-blue-500 underline">
              careers@cryptoview.com
            </a>
          </p>
          <p>
            In your cover letter, mention the position you are applying for and briefly explain why you are a good fit for the role.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carrier;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white-500 p-6 shadow-lg bg-blue-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Quick Links</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/about">About</Link></li>
              <li className="mb-2"><Link to="/contact">Contact</Link></li>
              <li className="mb-2"><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Connect With Us</h3>
            <ul className="list-none p-0">
              <li className="mb-2"><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li className="mb-2"><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li className="mb-2"><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li className="mb-2"><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Contact Us</h3>
            <p className="mb-2">Behera Mansion</p>
            <p className="mb-2">Cuttack, Odisha</p>
            <p className="mb-2"><a href="mailto:info@yourwebsite.com" className="underline">info@yourwebsite.com</a></p>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

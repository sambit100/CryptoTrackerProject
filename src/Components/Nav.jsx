import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import hamburger1 from "../assets/images/hamburger1.jpg";
import Products from '../Secondpage/Products';
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (sectionPath) => {
    toggleMenu(); 
    navigate(sectionPath); 
  };

  return (
    <>
      <header className="shadow-lg  z-50 top-0">
        <nav className="px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <NavLink to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-12" alt="Logo" />
            </NavLink>
            <div className="relative text-[40px] ml-3 font-bold text-orange-300">
              CryptoView
            </div>

            
            <div className="block lg:hidden">
              <button onClick={toggleMenu}>
                <img
                  src={hamburger1}
                  alt="hamburger"
                  width={25}
                  height={25}
                />
              </button>
            </div>

          
            {isMenuOpen && (
              <ul className="lg:hidden absolute top-16 left-0 w-full bg-white">
                <li>
                  <button
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700"
                    onClick={() => handleClick("/")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700"
                      onClick={() => <Products/>}
                  >
                    Product
                  </button>
                </li>
                <li>
                  <button
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700"
                    onClick={() => handleClick("/About")}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700"
                    onClick={() => handleClick("/Contact")}
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    className="block py-2 pr-4 pl-3 text-gray-700 hover:text-orange-700"
                    onClick={() => handleClick("/Carrier")}
                  >
                    Carrier
                  </button>
                </li>
              </ul>
            )}

          
            <ul className="hidden lg:flex flex-1 justify-center items-center gap-16 text-2xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Carrier"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Carrier
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;

import React from "react";
import Image from "next/image"; // Importing the Next.js Image component

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-md">
        {/* Top bar with logo, search, and cart icons */}
        <div className="flex items-center justify-between py-4 px-8 border-b-2">
          {/* Search icon */}
          <Image
            src="/images/search.png"
            alt="search"
            width={24}  // Define the width of the image
            height={24} // Define the height of the image
            className="cursor-pointer"
          />
          
          {/* Logo */}
          <h1 className="text-lg font-bold text-gray-900">
            Avion
          </h1>
          
          {/* Cart and Account icons */}
          <div className="flex items-center space-x-6">
            <Image
              src="/images/cart.png"
              alt="cart"
              width={24}
              height={24}
              className="cursor-pointer"
            />
            <Image
              src="/images/account.png"
              alt="account"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Navigation links */}
        <div className="bg-gray-50">
          <ul className="flex justify-center space-x-10 py-3">
            <li className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300">Plant Pots</li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300">Ceramics</li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300">Tables</li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300">Chairs</li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300">Crockery</li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300">Tableware</li>
            <li className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 transition duration-300">Cutlery</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

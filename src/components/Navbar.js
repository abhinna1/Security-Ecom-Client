import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 min-h-[10vh] flex ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">Ecommerce Store</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Products</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Cart</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

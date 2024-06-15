// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link to="/" className="text-white text-lg font-semibold">Home</Link>
            <Link to="/add-interview" className="text-white text-lg font-semibold">Add Interview</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md relative z-50">
      <div className="container mx-auto px-6 flex items-center justify-between py-4 hover:bg-violet-600">
        <h1 className="text-2xl font-bold tracking-wide">CollegeHub</h1>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white font-semibold relative group transform translate-y-4 transition-transform duration-500 hover:translate-y-0">
            Home
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link to="/signup" className="text-white font-semibold relative group transform translate-y-4 transition-transform duration-500 hover:translate-y-0">
            Sign Up
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link to="/signin" className="text-white font-semibold relative group transform translate-y-4 transition-transform duration-500 hover:translate-y-0">
            Sign In
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link to="/admin-signin" className="text-white font-semibold relative group transform translate-y-4 transition-transform duration-500 hover:translate-y-0">
            Are You an Admin?
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-blue-600 to-blue-800 absolute top-full left-0 w-full">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="text-white font-semibold relative group" onClick={() => setIsMenuOpen(false)}>
                Home
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-white font-semibold relative group" onClick={() => setIsMenuOpen(false)}>
                Sign Up
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link to="/signin" className="text-white font-semibold relative group" onClick={() => setIsMenuOpen(false)}>
                Sign In
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
            <li>
              <Link to="/admin-signin" className="text-white font-semibold relative group" onClick={() => setIsMenuOpen(false)}>
                Are You an Admin?
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-300 scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

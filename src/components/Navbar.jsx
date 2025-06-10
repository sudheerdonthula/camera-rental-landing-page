import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl group-hover:scale-110 transition-transform duration-200">
              📸
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Chandu Camera Rentals
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">
                Professional Equipment Rentals
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/')
                  ? 'text-blue-400 bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center space-x-1">
                <span>🏠</span>
                <span>Home</span>
              </span>
              {isActive('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/about"
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/about')
                  ? 'text-blue-400 bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center space-x-1">
                <span>👥</span>
                <span>About</span>
              </span>
              {isActive('/about') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </Link>

            <Link
              to="/contact"
              className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/contact')
                  ? 'text-blue-400 bg-gray-800'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center space-x-1">
                <span>📞</span>
                <span>Contact</span>
              </span>
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-200 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100 pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg mt-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/')
                  ? 'text-blue-400 bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span>🏠</span>
              <span>Home</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/about')
                  ? 'text-blue-400 bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span>👥</span>
              <span>About</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/contact')
                  ? 'text-blue-400 bg-gray-700'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <span>📞</span>
              <span>Contact</span>
            </Link>

            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          AutoInterviewer.ai
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
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

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-700 hover:text-indigo-600">Features</Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-indigo-600">How It Works</Link>
          <Link href="#get-started" className="text-white bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-700">Get Started</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="#features" className="block py-2 text-gray-700">Features</Link>
          <Link href="#how-it-works" className="block py-2 text-gray-700">How It Works</Link>
          <Link href="#get-started" className="block py-2 text-indigo-600 font-semibold">Get Started</Link>
        </div>
      )}
    </nav>
  );
}




import React, { useState } from 'react';
import clsx from 'clsx';

const Navbar = ({
  brand = 'Progressive Mind',
  links = [
    { label: 'Home', href: '#' },
    { label: 'Mission', href: '#mission' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  bgColor = 'bg-black',
  textColor = 'text-white',
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={clsx('w-full fixed top-0 left-0 z-50', bgColor, textColor, 'font-calsans')}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="text-2xl font-bold">
          {brand}
        </a>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block w-full hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

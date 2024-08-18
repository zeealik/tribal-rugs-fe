import React, { useState } from 'react';
import { Search, ShoppingBag } from 'lucide-react'; // Import icons from lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'The Life Collection', href: '#' },
    { name: 'Handmade Khaddi Rugs', href: '#' },
    { name: 'Weekly Deals - Upto 50% OFF', href: '#' },
    { name: 'Rugs', href: '#', dropdown: true },
    { name: 'Sofas', href: '#', dropdown: true },
    { name: 'Dining Tables', href: '#' },
    { name: 'Center Tables', href: '#' },
    { name: 'Decor', href: '#', dropdown: true },
    { name: 'Dining', href: '#', dropdown: true },
    { name: 'Prayer Mats', href: '#' },
    { name: 'Door & Bath Mats', href: '#', dropdown: true },
    { name: 'Flooring', href: '#', dropdown: true },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Search className="text-gray-500 w-5 h-5" />
          <a href="#" className="font-semibold text-gray-500 text-lg">
            Shams Carpet
          </a>
          <ShoppingBag className="text-gray-500 w-5 h-5" />
        </div>
        <div className="flex justify-center space-x-1">
          <div className="hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300"
              >
                {item.name}
                {item.dropdown && (
                  <svg
                    className="w-4 h-4 inline-block ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-gray-900"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

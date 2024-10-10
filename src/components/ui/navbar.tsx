import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ChevronLeft } from 'lucide-react'; // Imported additional icons for sidebar
import ThemeToggle from './theme-toggler';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'The Life Collection', href: '#' },
    { name: 'Handmade Khaddi Rugs', href: '#' },
    { name: 'Weekly Deals - Upto 50% OFF', href: '#' },
    { name: 'Rugs', href: '#' },
    { name: 'Sofas', href: '#' },
    { name: 'Dining Tables', href: '#' },
    { name: 'Center Tables', href: '#' },
    { name: 'Decor', href: '#' },
    { name: 'Dining', href: '#' },
    { name: 'Prayer Mats', href: '#' },
    { name: 'Door & Bath Mats', href: '#' },
    { name: 'Flooring', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg dark:bg-gray-800/80'
            : 'bg-white dark:bg-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Left Div: Search and Breadcrumb Icons */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden outline-none">
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" />
                )}
              </button>
              <Search className="text-gray-500 dark:text-gray-400 w-5 h-5" />
              {/* <button className="block sm:hidden">
                <ChevronLeft className="text-gray-500 dark:text-gray-400 w-5 h-5" />
              </button> */}
            </div>

            {/* Center Div: Page Title */}
            <div className="flex-1 text-center">
              <a
                href="/"
                className="font-semibold text-gray-500 dark:text-gray-400 text-lg cursor-pointer"
              >
                Tribal Rugs Palace
              </a>
            </div>

            {/* Right Div: Cart and Theme Toggle */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <ShoppingBag className="text-gray-500 dark:text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div className="flex justify-center space-x-1">
            <div className="hidden md:flex items-center">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="py-4 px-2 text-[12px] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300 hover:cursor-pointer relative"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-white/70 backdrop-blur-lg" />
        <div className="relative z-10 p-4">
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 transition duration-300"
                onClick={() => setIsOpen(false)} // Close the sidebar when an item is clicked
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

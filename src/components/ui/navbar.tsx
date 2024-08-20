import { useState, useEffect } from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Search className="text-gray-500 w-5 h-5" />
          <a href="#" className="font-semibold text-gray-500 text-lg">
            Tribal Rugs Palace
          </a>
          <ShoppingBag className="text-gray-500 w-5 h-5" />
        </div>
        <div className="flex justify-center space-x-1">
          <div className="hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="py-4 px-2 text-[12px] text-gray-500 hover:text-gray-900 transition duration-300 hover:cursor-pointer relative"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
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
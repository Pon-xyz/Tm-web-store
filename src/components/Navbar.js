import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'หน้าแรก', path: '/' },
    { name: 'สินค้าและบริการ', path: '/products' },
    { name: 'เกี่ยวกับเรา', path: '/about' },
    { name: 'ติดต่อ', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logos/tm-logo-main.png" // ← update this path
              alt="TM Logo"
              className="w-10 h-10 object-contain rounded-lg"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-steel-800">TM การช่างปัตตานี</h1>
              <p className="text-sm text-steel-600">โรงงานโลหะสแตนเลส</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${isActive(item.path)
                  ? 'text-steel-600 border-b-2 border-steel-600'
                  : 'text-steel-700 hover:text-steel-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:073-414443"
              className="flex items-center space-x-1 text-steel-600 hover:text-steel-700 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">073-414443</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-steel-600 hover:bg-industrial-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-industrial-200">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${isActive(item.path)
                    ? 'bg-steel-100 text-steel-700'
                    : 'text-steel-600 hover:bg-industrial-100'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 border-t border-industrial-200 mt-4">
                <a
                  href="tel:073-414443"
                  className="flex items-center space-x-2 text-steel-600 hover:text-steel-700 transition-colors"
                >
                  <Phone size={16} />
                  <span>073-414443</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
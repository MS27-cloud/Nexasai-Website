import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  // Normalize current path for GitHub Pages subpath by stripping Vite base
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const currentPath = (location.pathname || '/').replace(base || '', '') || '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            <img
              src={logo}
              alt="Nexasai Solutions Logo"
              className="h-12 w-12"
              width="48"
              height="48"
            />
            <span className={`text-lg font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Nexasai Solutions
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-300 ${
                  currentPath === item.path
                    ? isScrolled
                      ? 'text-red-600 bg-red-50'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                aria-current={currentPath === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`ml-2 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                isScrolled
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-white text-gray-900 hover:bg-gray-50'
              }`}
            >
              Get Started
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            className="lg:hidden mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-100 p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 font-medium rounded-lg transition-all duration-200 ${
                    currentPath === item.path
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={currentPath === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-4 bg-red-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

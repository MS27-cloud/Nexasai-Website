import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Nexasai Solutions"
                  className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                  width="40"
                  height="40"
                />
              </div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                Nexasai
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                    location.pathname === item.path
                      ? isScrolled
                        ? 'text-red-600 bg-red-50'
                        : 'text-white bg-white/20'
                      : isScrolled
                      ? 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/contact"
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-sm'
                    : 'bg-white text-red-600 hover:bg-white/90 shadow-lg shadow-red-500/20'
                }`}
              >
                Book a Call
              </Link>
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
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
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-full overflow-y-auto">
                <div className="p-6 space-y-1">
                  {navItems.map(item => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="p-6 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-3 rounded-lg font-semibold text-center text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg shadow-red-500/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Book a Call
                  </Link>
                </div>

                <div className="p-6">
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-900 mb-2">Get in touch</p>
                    <p>Email: contact@nexasai.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

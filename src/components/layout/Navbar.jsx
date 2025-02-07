// src/components/layout/Navbar.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HiMenu, HiX } from 'react-icons/hi';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navbarHeight = 64; // wysokość nawigacji
    const targetPosition = section.offsetTop - navbarHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

const NavLink = ({ children, scrolled, mobile, sectionId, onClick }) => (
  <span
    onClick={() => {
      scrollToSection(sectionId);
      if (onClick) onClick();
    }}
    className={`cursor-pointer font-light transition-colors
      ${mobile ? 'text-2xl py-4' : 'text-base'}
      ${scrolled ? 'text-gray-800 hover:text-red-600' : 'text-white hover:text-yellow-400'}
    `}
  >
    {children}
  </span>
);

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  scrolled: PropTypes.bool.isRequired,
  mobile: PropTypes.bool,
  sectionId: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <span
                onClick={() => scrollToSection('hero')}
                className={`text-2xl font-light cursor-pointer ${
                  scrolled ? 'bg-gradient-to-r from-yellow-500 via-red-500 to-red-600 text-transparent bg-clip-text' : 'text-white'
                }`}
              >
                Casa Bella
              </span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink scrolled={scrolled} sectionId="features">O nas</NavLink>
              <NavLink scrolled={scrolled} sectionId="gallery">Galeria</NavLink>
              <NavLink scrolled={scrolled} sectionId="location">Lokalizacja</NavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-yellow-500 via-red-500 to-red-600 text-white px-6 py-2 rounded-full font-light hover:from-yellow-600 hover:via-red-600 hover:to-red-700 transition-all shadow-md hover:shadow-lg"
              >
                Rezerwuj
              </motion.button>
            </div>

            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full ${scrolled ? 'text-red-600' : 'text-white'}`}
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="fixed inset-0 bg-black/50" 
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-64 bg-gradient-to-br from-yellow-50 to-red-50 shadow-xl p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex flex-col items-center space-y-6 mt-16">
                <NavLink scrolled={true} mobile={true} sectionId="features" onClick={() => setIsMenuOpen(false)}>
                  O nas
                </NavLink>
                <NavLink scrolled={true} mobile={true} sectionId="gallery" onClick={() => setIsMenuOpen(false)}>
                  Galeria
                </NavLink>
                <NavLink scrolled={true} mobile={true} sectionId="location" onClick={() => setIsMenuOpen(false)}>
                  Lokalizacja
                </NavLink>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-yellow-500 via-red-500 to-red-600 text-white px-8 py-3 rounded-full text-xl font-light mt-4 shadow-md hover:shadow-lg"
                >
                  Rezerwuj
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
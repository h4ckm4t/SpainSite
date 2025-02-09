// src/components/layout/Footer.jsx

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaHeart } from 'react-icons/fa';

const ContactPopup = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={onClose}>
          <motion.div
            initial={{ scale: 0, y: 100, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h3 className="text-2xl font-light text-gray-800 mb-6 text-center">Skontaktuj się z nami</h3>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <a href="tel:+48608480546" className="flex items-center space-x-4 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                <div className="bg-red-500 p-3 rounded-full">
                  <FaPhoneAlt className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Zadzwoń do nas</p>
                  <p className="text-lg text-gray-800">+48 608 480 546</p>
                </div>
              </a>
              <a href="mailto:wakacje@mwnet.us" className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Napisz do nas</p>
                  <p className="text-lg text-gray-800">wakacje@mwnet.us</p>
                </div>
              </a>
            </motion.div>
            <motion.button
              onClick={onClose}
              className="mt-6 w-full p-3 bg-gray-100 rounded-xl text-gray-600 hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Zamknij
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

ContactPopup.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleOpen = () => setShowContact(true);
    document.addEventListener("openContactPopup", handleOpen);
    return () => document.removeEventListener("openContactPopup", handleOpen);
  }, []);

  return (
    <footer className="relative z-10 bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-light mb-4">Casa Bonita</h3>
            <p className="text-white/80">
              Calle Ancla 67<br />
              03191 Torre de la Horadada<br />
              Prowincja Alicante<br />
              Hiszpania
            </p>
          </div>
          <div className="text-center">
            <motion.button
              className="bg-white text-red-600 px-8 py-3 rounded-full font-light inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05, backgroundColor: "#fff", boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContact(true)}
            >
              <FaPhoneAlt className="mr-2" />
              <span>Kontakt</span>
            </motion.button>
          </div>
          <div className="text-right">
            <div className="space-y-2">
              <p className="hover:text-yellow-200 cursor-pointer transition-colors">O nas</p>
              <p className="hover:text-yellow-200 cursor-pointer transition-colors">Galeria</p>
              <p className="hover:text-yellow-200 cursor-pointer transition-colors">Lokalizacja</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 flex items-center justify-center">
            Made with <FaHeart className="mx-2 text-red-400" /> in Poland
          </p>
        </div>
      </div>
      <ContactPopup isVisible={showContact} onClose={() => setShowContact(false)} />
    </footer>
  );
};

export default Footer;

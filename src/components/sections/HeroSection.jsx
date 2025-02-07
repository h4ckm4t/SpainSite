// src/components/sections/HeroSection.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000'
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(images.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImage]);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {/* Previous Image */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url(${images[previousImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Current Image with Transition */}
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="text-center space-y-8 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-light"
          >
            Twój dom w Hiszpanii
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
          >
            Luksusowa willa z basenem, zaledwie 500 metrów od piaszczystej plaży
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button className="bg-gradient-to-r from-yellow-500 via-red-500 to-red-600 text-white px-8 py-3 rounded-full text-lg font-light hover:from-yellow-600 hover:via-red-600 hover:to-red-700 transition-all">
              Zobacz więcej
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
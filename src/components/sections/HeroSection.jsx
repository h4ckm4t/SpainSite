// src/components/sections/HeroSection.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/I18nProvider.jsx';
import { withAssetVersion } from '../../utils/assetVersion';
const images = [
  withAssetVersion('/images/2.jpeg'),
  withAssetVersion('/images/3.jpeg'),
  withAssetVersion('/images/13.jpeg')
];
const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(images.length - 1);
  const { t } = useI18n();
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
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
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

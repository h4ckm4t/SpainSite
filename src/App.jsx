
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import GallerySection from './components/sections/GallerySection';
import LocationSection from './components/sections/LocationSection';
import WeatherSection from './components/sections/WeatherSection';
import Footer from './components/layout/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-600 to-yellow-500"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white text-center"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-6xl font-light mb-4"
              >
                ¡Bienvenidos!
              </motion.h1>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-2xl font-light"
              >
                Casa Bella
              </motion.span>
            </motion.div>
          </motion.div>
        ) : (
          <>
            
            {/* Main content container */}
            <div className="relative z-[100]"> {/* Wyższy z-index niż elementy parallax */}
              <Navbar />
              <main className="relative min-h-screen">
                <div id="hero" className="relative">
                  <HeroSection />
                </div>
                <div id="features" className="relative bg-white/90"> {/* Półprzezroczyste tło */}
                  <FeaturesSection />
                </div>
                <div id="gallery" className="relative bg-white/90">
                  <GallerySection />
                </div>
                <div id="weather" className="relative bg-white/90">
                  <WeatherSection />
                </div>
                <div id="location" className="relative bg-white/90">
                  <LocationSection />
                </div>
              </main>
              <Footer />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
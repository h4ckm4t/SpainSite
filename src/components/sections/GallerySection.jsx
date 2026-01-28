// src/components/sections/GallerySection.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { galleryImages } from '../../data/galleryImages';
import { FaArrowLeft, FaArrowRight, FaExpand } from 'react-icons/fa';

const ImageModal = ({ image, onClose, onNext, onPrev }) => {
  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative max-w-7xl w-full h-full"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-black/20 p-2 rounded-full"
        >
          ✕
        </button>
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 bg-black/20 p-4 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 bg-black/20 p-4 rounded-full"
        >
          <FaArrowRight />
        </button>
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black/20 p-4 rounded-xl">
          <h3 className="text-xl font-light">{image.title}</h3>
          <p className="text-sm text-gray-300">{image.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

ImageModal.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }),
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired
};

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleNext = () => {
    const nextIndex = selectedImage ? 
      (galleryImages.findIndex(img => img.id === selectedImage.id) + 1) % galleryImages.length :
      (currentImage + 1) % galleryImages.length;
    
    if (selectedImage) {
      setSelectedImage(galleryImages[nextIndex]);
    } else {
      setCurrentImage(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = selectedImage ?
      (galleryImages.findIndex(img => img.id === selectedImage.id) - 1 + galleryImages.length) % galleryImages.length :
      (currentImage - 1 + galleryImages.length) % galleryImages.length;
    
    if (selectedImage) {
      setSelectedImage(galleryImages[prevIndex]);
    } else {
      setCurrentImage(prevIndex);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Galeria
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zobacz, gdzie spędzisz swoje wymarzone wakacje!
          </p>
        </motion.div>

        <div className="relative h-[600px] group"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>
          <div className="absolute inset-0">
            {/* Previous Image */}
            <div className="absolute inset-0">
              <img
                src={galleryImages[(currentImage - 1 + galleryImages.length) % galleryImages.length].url}
                alt="Previous"
                className="w-full h-full object-cover opacity-0"
              />
            </div>
            
            {/* Current Image */}
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={galleryImages[currentImage].url}
                alt={galleryImages[currentImage].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Image Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-8 bg-white/80 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-light mb-2 text-gray-900">{galleryImages[currentImage].title}</h3>
            <p className="text-gray-600">{galleryImages[currentImage].description}</p>
          </motion.div>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/80 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg"
              onClick={handlePrev}
            >
              <FaArrowLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/80 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg"
              onClick={handleNext}
            >
              <FaArrowRight size={20} />
            </motion.button>
          </div>

          <motion.button
            className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-gray-900 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            onClick={() => setSelectedImage(galleryImages[currentImage])}
          >
            <FaExpand size={20} />
          </motion.button>

          {/* Image indicators */}
          <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? 'bg-gray-900 w-6' : 'bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

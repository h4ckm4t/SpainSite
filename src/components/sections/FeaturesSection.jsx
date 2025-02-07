// src/components/sections/FeaturesSection.jsx
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { 
  FaSun, 
  FaBed, 
  FaShower, 
  FaPlane, 
  FaSwimmingPool, 
  FaWifi 
} from 'react-icons/fa';
import { MdKitchen, MdBeachAccess } from 'react-icons/md';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="text-red-600 mb-4">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const FeaturesSection = () => {
  const features = [
    {
      icon: MdBeachAccess,
      title: "500m do plaży",
      description: "Krótki spacer dzieli Cię od pięknej, piaszczystej plaży"
    },
    {
      icon: FaSwimmingPool,
      title: "Prywatny basen",
      description: "Basen typu salina bez chloru, idealny do relaksu"
    },
    {
      icon: FaBed,
      title: "3 sypialnie",
      description: "Komfortowe pokoje dla całej rodziny"
    },
    {
      icon: FaShower,
      title: "2 łazienki",
      description: "W pełni wyposażone, nowoczesne łazienki"
    },
    {
      icon: MdKitchen,
      title: "Wyposażona kuchnia",
      description: "Wszystko co potrzebne do przygotowania posiłków"
    },
    {
      icon: FaWifi,
      title: "Szybki internet",
      description: "Światłowód 600/600 Mb/s"
    },
    {
      icon: FaSun,
      title: "Klimatyzacja",
      description: "Komfortowa temperatura przez cały rok"
    },
    {
      icon: FaPlane,
      title: "Dobry dojazd",
      description: "50 km od lotniska w Alicante"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Co oferujemy?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nasz dom zapewnia wszystko, czego potrzebujesz do komfortowego wypoczynku
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
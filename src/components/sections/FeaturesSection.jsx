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
import { useI18n } from '../../i18n/I18nProvider.jsx';

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
  const { t } = useI18n();
  const features = [
    {
      icon: MdBeachAccess,
      key: 'features.items.beach'
    },
    {
      icon: FaSwimmingPool,
      key: 'features.items.pool'
    },
    {
      icon: FaBed,
      key: 'features.items.bedrooms'
    },
    {
      icon: FaShower,
      key: 'features.items.bathrooms'
    },
    {
      icon: MdKitchen,
      key: 'features.items.kitchen'
    },
    {
      icon: FaWifi,
      key: 'features.items.wifi'
    },
    {
      icon: FaSun,
      key: 'features.items.ac'
    },
    {
      icon: FaPlane,
      key: 'features.items.travel'
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
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(`${feature.key}.title`)}
              description={t(`${feature.key}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

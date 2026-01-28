// src/components/sections/WeatherSection.jsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TbTemperatureCelsius, TbWind } from 'react-icons/tb';
import { FaSun, FaMoon, FaCloud, FaCloudRain, FaCloudSun, FaSnowflake, FaCloudMeatball, FaBolt } from 'react-icons/fa';
import { getWeatherData } from '../../utils/weatherApi';
import { useI18n } from '../../i18n/I18nProvider.jsx';

const getWeatherIcon = (iconName, size = 24) => {
  const icons = {
    'sun': FaSun,
    'moon': FaMoon,
    'cloud': FaCloud,
    'cloud-sun': FaCloudSun,
    'cloud-rain': FaCloudRain,
    'cloud-snow': FaSnowflake,
    'cloud-fog': FaCloudMeatball,
    'cloud-lightning': FaBolt
  };

  const Icon = icons[iconName] || FaCloud;
  return <Icon size={size} />;
};

const WeatherCard = ({ day, temp, temp_min, icon }) => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center shadow-lg"
    >
      <span className="text-gray-600">{day}</span>
      <div className="text-yellow-500 my-2">
        {getWeatherIcon(icon, 32)}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-start">
          <span className="text-2xl font-light">{temp}</span>
          <TbTemperatureCelsius className="text-xl" />
        </div>
        <span className="text-sm text-gray-500">{t('weather.minLabel', { temp: temp_min })}</span>
      </div>
    </motion.div>
  );
};

WeatherCard.propTypes = {
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  temp_min: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeInSpain, setTimeInSpain] = useState('');
  const { locale, t } = useI18n();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherData({ locale });
        setWeatherData(data);
        setLoading(false);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError(t('weather.error'));
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 1800000); // Odświeżaj co 30 minut

    return () => clearInterval(interval);
  }, [locale, t]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const spainTime = now.toLocaleTimeString(locale, {
        timeZone: 'Europe/Madrid',
        hour: '2-digit',
        minute: '2-digit'
      });
      setTimeInSpain(spainTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [locale]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!weatherData) return null;

  const { current, forecast, comparePoland } = weatherData;

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            {t('weather.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('weather.localTime', { time: timeInSpain })}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Current Weather */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-light mb-2">{t('weather.current')}</h3>
              </div>
              <div className="text-4xl">
                {getWeatherIcon(current.icon, 48)}
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-start">
                <span className="text-6xl font-light">{current.temp}</span>
                <TbTemperatureCelsius className="text-3xl mt-2" />
              </div>
              <div className="flex items-center mt-2 text-blue-100">
                <TbWind className="mr-2" />
                <span>{t('weather.wind', { speed: current.windspeed })}</span>
              </div>
            </div>
          </motion.div>

          {/* Compare with Poland */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-between"
          >
            <div>
              <h3 className="text-2xl font-light mb-4">{t('weather.compareTitle')}</h3>
              <div className="flex items-center space-x-12">
                <div>
                  <p className="text-gray-600">Torre de la Horadada</p>
                  <div className="flex items-start">
                    <span className="text-4xl font-light">{current.temp}</span>
                    <TbTemperatureCelsius className="text-2xl" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600">{t('weather.polandCity')}</p>
                  <div className="flex items-start">
                    <span className="text-4xl font-light">{comparePoland.temp}</span>
                    <TbTemperatureCelsius className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Forecast */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {forecast.map((day) => (
            <WeatherCard
              key={day.day}
              {...day}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/sections/StatsSection.jsx
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSun, FaSwimmingPool, FaUmbrellaBeach, FaPlane } from 'react-icons/fa';

const stats = [
  {
    icon: FaSun,
    value: 300,
    suffix: '+',
    label: 'słonecznych dni w roku',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: FaUmbrellaBeach,
    value: 500,
    suffix: 'm',
    label: 'do pięknej plaży',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: FaSwimmingPool,
    value: 2,
    label: 'baseny do dyspozycji',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    icon: FaPlane,
    value: 40,
    suffix: 'km',
    label: 'od lotniska',
    color: 'from-sky-400 to-sky-600'
  }
];

// eslint-disable-next-line react/prop-types
const CountUp = ({ value, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = (timestamp - startTimestamp) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(progress * value));
          requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold">
      {count}{suffix}
    </span>
  );
};

const StatCard = ({ icon: Icon, value, suffix, label, color }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-white text-2xl" />
        </div>
        <CountUp value={value} suffix={suffix} />
        <p className="text-gray-600 mt-2">{label}</p>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
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
            Dlaczego my?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Idealne miejsce na wymarzony wypoczynek
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
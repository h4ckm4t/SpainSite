// src/components/layout/AnimatedBackground.jsx
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Hiszpańskie wzory w tle */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32"
          style={{
            top: `${(i * 25) + Math.random() * 10}%`,
            left: `${(i * 20) + Math.random() * 10}%`,
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23DC2626" fill-opacity="0.1" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/></svg>')`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Delikatne kółka */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-red-200"
          style={{
            width: `${100 + i * 40}px`,
            height: `${100 + i * 40}px`,
            top: '20%',
            right: '10%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Gradient overlay dla lepszej czytelności */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
    </div>
  );
};

export default AnimatedBackground;
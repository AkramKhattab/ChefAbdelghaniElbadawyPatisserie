import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDark((d) => !d)}
      className="fixed top-24 right-8 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? (
        <FaSun className="w-5 h-5 text-amber-500" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 
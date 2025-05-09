import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light dark:bg-gray-900">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-serif text-amber-600 dark:text-amber-400">404</h1>
        </motion.div>
        
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-serif mb-4 text-gray-800 dark:text-white"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          The page you are looking for does not exist.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/"
            className="btn btn-primary"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 
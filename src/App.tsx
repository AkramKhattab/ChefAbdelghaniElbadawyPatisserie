import { motion } from 'framer-motion';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Navigation from './components/Navigation';
import Skills from './components/Skills';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import HeroBackground from './components/HeroBackground';
// import Hero from './components/Hero'; // Removed as it is unused and causing an error
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  return (
    <div className="min-h-screen gradient-bg pattern-overlay transition-colors duration-300 overflow-x-hidden">
      <Navigation />
      <ThemeToggle />
      <ScrollToTop />
        {/* Hero Section */}      <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <HeroBackground />
        <div className="container relative z-20 text-center px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto backdrop-blur-md bg-black/40 p-6 sm:p-8 md:p-12 rounded-2xl border border-white/20 shadow-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block text-amber-200/90 text-sm sm:text-base md:text-lg mb-4 font-medium tracking-wider uppercase"
            >
              Welcome to
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6 text-white [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)] leading-tight"
            >
              Chef Abdelghani Elbadawy
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-24 h-1 bg-amber-400/60 mx-auto mb-4 sm:mb-6 rounded-full shadow-lg"
            />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 text-amber-100/90 font-light [text-shadow:_1px_1px_8px_rgb(0_0_0_/_80%)] max-w-2xl mx-auto"
            >
              Creating Moments of Joy Through Artisanal Pastries
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#gallery"
                className="btn btn-primary text-base sm:text-lg shadow-xl hover:shadow-2xl bg-amber-600/90 hover:bg-amber-500/90 backdrop-blur-sm border border-amber-400/20 w-full sm:w-auto"
              >
                Explore My Creations
              </a>
              <a
                href="#contact"
                className="btn text-base sm:text-lg shadow-xl hover:shadow-2xl bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm w-full sm:w-auto transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif mb-12 text-center dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed dark:text-gray-100">
                With years of experience in pastry arts, I've traveled across Europe and the Middle East,
                mastering various techniques and styles. My journey has taken me through France, Italy,
                Spain, Greece, Germany, Lithuania, and Kuwait, enriching my culinary expertise.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 sm:p-6 bg-primary-light dark:bg-gray-800 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
                >
                  <motion.h3 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-4xl font-bold text-primary dark:text-amber-400 mb-2"
                  >
                    15+
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-700 dark:text-gray-100 font-medium text-xs sm:text-base"
                  >
                    Years Experience
                  </motion.p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 sm:p-6 bg-primary-light dark:bg-gray-800 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
                >
                  <motion.h3 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl sm:text-4xl font-bold text-primary dark:text-amber-400 mb-2"
                  >
                    7+
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 dark:text-gray-100 font-medium text-xs sm:text-base"
                  >
                    Countries
                  </motion.p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 sm:p-6 bg-primary-light dark:bg-gray-800 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
                >
                  <motion.h3 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl sm:text-4xl font-bold text-primary dark:text-amber-400 mb-2"
                  >
                    1000+
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-700 dark:text-gray-100 font-medium text-xs sm:text-base"
                  >
                    Creations
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[300px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 dark:from-amber-400/20 dark:to-amber-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/30 dark:bg-amber-400/30 mb-4 mx-auto flex items-center justify-center">
                      <span className="text-3xl sm:text-4xl">👨‍🍳</span>
                    </div>
                    <p className="text-lg sm:text-xl font-serif text-primary-dark dark:text-amber-400">Chef's Image</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 bg-primary/20 dark:bg-amber-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 bg-primary/20 dark:bg-amber-400/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="overflow-hidden">
        <Gallery />
      </section>

      {/* Experience Section */}
      <section id="experience" className="overflow-hidden">
        <Experience />
      </section>

      {/* Skills Section */}
      <section id="skills" className="overflow-hidden">
        <Skills />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="overflow-hidden">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-primary-light dark:bg-gray-900 overflow-hidden">
        <div className="container px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif mb-12 text-center dark:text-white"
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8">
            {/* Left: Contact Info */}
            <div className="flex flex-col justify-center items-center text-center p-4 border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-semibold text-primary dark:text-amber-400 mb-2">Chef Abdelghani Elbadawy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.</p>
              </div>
              <div className="flex justify-center space-x-6 mb-4">
                <a 
                  href="#" 
                  className="text-3xl text-primary hover:text-primary-dark dark:text-amber-400 dark:hover:text-amber-300 transition-colors duration-300"
                  aria-label="Visit our Facebook page"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="mailto:contact@chefdulce.com" 
                  className="text-3xl text-primary hover:text-primary-dark dark:text-amber-400 dark:hover:text-amber-300 transition-colors duration-300"
                  aria-label="Send us an email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
            
            {/* Right: Contact Form */}
            <div className="p-4">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-amber-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-amber-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-amber-400 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App; 
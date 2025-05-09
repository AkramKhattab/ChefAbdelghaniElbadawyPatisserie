import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu
      setIsMobileMenuOpen(false);
      
      // Add a small delay to ensure the mobile menu is closed
      setTimeout(() => {
        const offset = 80; // Adjust this value based on your header height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 10);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'gallery', 'experience', 'skills', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              href="#home"
              className={`text-xl sm:text-2xl font-serif font-bold transition-colors duration-300 ${
                isScrolled
                  ? 'text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300'
                  : 'text-white hover:text-amber-200'
              }`}
            >
              Chef Abdelghani Elbadawy Pâtisserie
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    !isScrolled
                      ? activeSection === link.id
                        ? 'text-amber-200 bg-white/10'
                        : 'text-white/90 hover:text-amber-200 hover:bg-white/10'
                      : activeSection === link.id
                      ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-800'
                : 'text-white hover:text-amber-200 hover:bg-white/10'
            }`}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden shadow-lg ${
              isScrolled
                ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'
                : 'bg-black/70 backdrop-blur-sm'
            }`}
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    !isScrolled
                      ? activeSection === link.id
                        ? 'text-amber-200 bg-white/10'
                        : 'text-white/90 hover:text-amber-200 hover:bg-white/10'
                      : activeSection === link.id
                      ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
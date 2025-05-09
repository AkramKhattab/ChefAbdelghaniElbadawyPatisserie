import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  width: number;
  height: number;
}

const categories = ['All', 'Wedding Cakes', 'Pastries', 'Special Events', 'Custom Orders'];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: 'images/chocolate-eclair.jpg',
    title: 'Classic Chocolate Éclair',
    category: 'Pastries',
    width: 800,
    height: 600
  },
  {
    id: 2,    image: 'images/fruit-tart.jpg',
    title: 'Seasonal Fruit Tart',
    category: 'Pastries',
    width: 800,
    height: 600
  },
  {
    id: 3,
    image: 'images/wedding-cake.jpg',
    title: 'Elegant Wedding Cake',
    category: 'Wedding Cakes',
    width: 800,
    height: 600
  },
  {
    id: 4,    image: 'images/macarons.jpg',
    title: 'French Macaron Collection',
    category: 'Pastries',
    width: 800,
    height: 600
  },
  {
    id: 5,
    image: 'images/birthday-cake.jpg',
    title: 'Celebration Birthday Cake',
    category: 'Special Events',
    width: 800,
    height: 600
  },
  {
    id: 6,
    image: 'images/custom-cookies.jpg',
    title: 'Artisanal Cookie Set',
    category: 'Custom Orders',
    width: 800,
    height: 600
  },
  {
    id: 7,
    image: 'images/Special Events.jpg',
    title: 'Luxury Event Centerpiece',
    category: 'Special Events',
    width: 800,
    height: 600
  },
  {
    id: 8,
    image: 'images/Special Events2.jpg',
    title: 'Grand Celebration Cake',
    category: 'Special Events',
    width: 800,
    height: 600
  },
  {
    id: 9,
    image: 'images/chocolate-eclairs.jpg',
    title: 'Gourmet Éclair Assortment',
    category: 'Pastries',
    width: 800,
    height: 600
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const sectionRef = useScrollAnimation('fade-in');

  const handleImageError = (id: number) => {
    console.error(`Failed to load image with id: ${id}`);
    setImageErrors(prev => new Set(prev).add(id));
  };

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[previousIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') {
        handlePrevious(e as any);
      } else if (e.key === 'ArrowRight') {
        handleNext(e as any);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section ref={sectionRef} className="section bg-neutral dark:bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title dark:text-white"
        >
          Gallery
        </motion.h2>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg dark:bg-amber-500 dark:text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:shadow-md dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Gallery of pastry creations"
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="gallery-item group hover-glow bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(item)}
                role="listitem"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {imageErrors.has(item.id) ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                      <p className="text-gray-500 dark:text-gray-300">Image not available</p>
                    </div>
                  ) : (                    <img
                      src={import.meta.env.BASE_URL + item.image.replace('./', '')}
                      alt={`${item.title} - ${item.category}`}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => handleImageError(item.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end backdrop-blur-sm">
                    <div className="w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="border-l-4 border-amber-400 pl-4 bg-black/40 rounded-r-lg p-3">
                        <h3 className="text-xl font-serif text-white mb-2 font-bold">{item.title}</h3>
                        <p className="text-sm font-medium tracking-wider text-amber-200 uppercase">{item.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 backdrop-blur-lg"
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
              aria-label="Image lightbox"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative max-w-5xl w-full bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative w-full h-[75vh] sm:h-[80vh] overflow-hidden">                  <img
                    src={import.meta.env.BASE_URL + selectedImage.image.replace('./', '')}
                    alt={selectedImage.title}
                    width={selectedImage.width}
                    height={selectedImage.height}
                    className="w-full h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
                    onError={() => handleImageError(selectedImage.id)}
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-gray-900 to-black rounded-b-lg">
                  <div className="max-w-2xl mx-auto">
                    <div className="border-l-4 border-amber-400 pl-4 mb-2">
                      <h3 className="text-2xl font-serif text-white mb-1">{selectedImage.title}</h3>
                      <p className="text-sm font-medium tracking-wider text-amber-200 uppercase">{selectedImage.category}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-300 bg-black/50 p-3 rounded-full hover:bg-black/70"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-400 transition-colors duration-300 bg-black/50 p-3 rounded-full hover:bg-black/70"
                  aria-label="Next image"
                >
                  <FaChevronRight className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors duration-300 bg-black/50 p-2 rounded-full hover:bg-black/70"
                  aria-label="Close lightbox"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
  width: number;
  height: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Planner',
    text: 'Chef Abdelghani created the most beautiful wedding cake I have ever seen. His attention to detail and creativity are unmatched.',
    image: 'https://i.pravatar.cc/128?img=1',
    rating: 5,
    width: 128,
    height: 128
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    text: 'Working with Chef Abdelghani has been a pleasure. His pastries have become the highlight of our dessert menu.',
    image: 'https://i.pravatar.cc/128?img=2',
    rating: 5,
    width: 128,
    height: 128
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Food Critic',
    text: 'The combination of traditional techniques and innovative flavors in Chef Abdelghani\'s creations is truly remarkable.',
    image: 'https://i.pravatar.cc/128?img=3',
    rating: 5,
    width: 128,
    height: 128
  }
];

export default function Testimonials() {
  const sectionRef = useScrollAnimation('fade-in');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section ref={sectionRef} className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Client Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover what our valued clients have to say about their experience with Chef Abdelghani's exceptional pastry creations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-neutral dark:bg-gray-800 rounded-2xl p-8 relative hover-glow"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-amber-600/20 dark:text-amber-400/20 text-4xl absolute top-6 left-6" />
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500 w-4 h-4" />
                ))}
              </div>
              {/* Testimonial Content */}
              <div className="relative z-10">
                <p className="text-gray-700 dark:text-gray-100 mb-6 italic text-responsive leading-relaxed">
                  {testimonial.text}
                </p>
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-500/20 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    {imageErrors[testimonial.id] ? (
                      <FaUser className="w-8 h-8 text-gray-400" />
                    ) : (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={testimonial.width}
                        height={testimonial.height}
                        loading="lazy"
                        onError={() => handleImageError(testimonial.id)}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-serif font-medium text-lg dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-500/5 dark:bg-amber-400/5 rounded-full blur-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    year: '2018',
    title: 'China',
    description: 'Visited China on July 3, 2018',
    icon: '🇨🇳',
    details: 'Explored Chinese pastry techniques and traditional desserts',
    achievements: ['Mastered traditional mooncake making', 'Studied regional dessert variations', 'Collaborated with local pastry chefs']
  },
  {
    year: '2008',
    title: 'Lithuania',
    description: 'Traveled to Rusiai, Panevėžio Apskritis, Lithuania',
    icon: '🇱🇹',
    details: 'Mastered Eastern European pastry traditions',
    achievements: ['Specialized in traditional Lithuanian desserts', 'Learned advanced chocolate techniques', 'Developed fusion recipes']
  },
  {
    year: '2007',
    title: 'Italy',
    description: 'Traveled to Italy',
    icon: '🇮🇹',
    details: 'Studied authentic Italian pastries and gelato making',
    achievements: ['Mastered artisanal gelato production', 'Studied traditional Italian pastries', 'Learned regional dessert specialties']
  },
  {
    year: '2006',
    title: 'European Tour',
    description: 'Traveled through France, Spain, Greece, and Germany',
    icon: '🇪🇺',
    details: 'Immersed in diverse European pastry cultures and techniques',
    achievements: ['French patisserie techniques', 'Spanish churros and desserts', 'Greek baklava mastery', 'German strudel expertise']
  },
  {
    year: '2003',
    title: 'Kuwait',
    description: 'Traveled to Kuwait',
    icon: '🇰🇼',
    details: 'Learned Middle Eastern dessert traditions and innovations',
    achievements: ['Traditional Arabic sweets', 'Modern dessert fusion', 'Regional spice combinations']
  },
];

export default function Experience() {
  const sectionRef = useScrollAnimation('fade-in');

  return (
    <section ref={sectionRef} className="section bg-white dark:bg-gray-900 py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4 dark:text-white">Global Culinary Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A decade-spanning exploration of international pastry arts, mastering techniques and traditions from around the world
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left Column - Year and Flag */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="md:w-48 flex-shrink-0"
                >
                  <div className="sticky top-24">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{exp.icon}</span>
                      <div>
                        <h3 className="text-2xl font-serif text-primary dark:text-amber-400">{exp.year}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex-grow"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                    <h4 className="text-2xl font-serif mb-4 dark:text-white">{exp.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>
                    <p className="text-gray-700 dark:text-gray-200 mb-8">{exp.details}</p>
                    
                    {/* Achievements List */}
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.4 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-primary dark:text-amber-400 mt-1">•</span>
                          <p className="text-gray-600 dark:text-gray-300">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 dark:bg-amber-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 dark:bg-amber-400/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
} 
import { motion } from 'framer-motion';
import { FaBirthdayCake, FaCookie, FaIceCream, FaCandyCane } from 'react-icons/fa';
import { GiCakeSlice, GiCupcake } from 'react-icons/gi';

interface Skill {
  icon: JSX.Element;
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: <FaBirthdayCake className="w-12 h-12" />,
    title: 'Wedding Cakes',
    description: 'Custom-designed wedding cakes that combine artistic vision with exceptional taste.'
  },
  {
    icon: <FaCookie className="w-12 h-12" />,
    title: 'French Pastries',
    description: 'Authentic French pastries made with traditional techniques and premium ingredients.'
  },  
  {
    icon: <FaIceCream className="w-12 h-12" />,
    title: 'Frozen Desserts',
    description: 'Innovative ice creams and sorbets with unique flavor combinations.'
  },
  {
    icon: <GiCakeSlice className="w-12 h-12" />,
    title: 'Specialty Cakes',
    description: 'Custom celebration cakes for all occasions, from birthdays to corporate events.'
  },
  {
    icon: <GiCupcake className="w-12 h-12" />,
    title: 'Petit Fours',
    description: 'Delicate bite-sized pastries perfect for afternoon tea or special events.'
  },
  {
    icon: <FaCandyCane className="w-12 h-12" />,
    title: 'Artisan Chocolates',
    description: 'Handcrafted chocolates with unique flavors and artistic presentation.'
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif mb-12 text-center dark:text-white"
        >
          Specialties
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-neutral dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-amber-600 mb-4 flex justify-center dark:text-amber-400">
                {skill.icon}
              </div>
              <h3 className="text-xl font-serif mb-3 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-100">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({
  children,
  id,
  className = '',
  bgColor = 'white',
}) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-gray-50',
    primary: 'bg-primary',
    secondary: 'bg-secondary/5',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className={`${bgColors[bgColor]} ${className} py-16 md:py-24`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionWrapper;

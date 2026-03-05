import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hover = true,
  ...props
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-md p-6 transition-all duration-300';

  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-2'
    : '';

  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : {}}
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

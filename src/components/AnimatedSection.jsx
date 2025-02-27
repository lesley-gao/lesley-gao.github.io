import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...props
}) => {

  // set initial positions for each direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: 50 };
      case 'down': return { opacity: 0, y: -50 };
      case 'left': return { opacity: 0, x: 50 };
      case 'right': return { opacity: 0, x: -50 };
      default: return { opacity: 0, y: 50 };
    }
  };

  // set final positions for each direction
  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down': return { opacity: 1, y: 0 };
      case 'left':
      case 'right': return { opacity: 1, x: 0 };
      default: return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] //  use cubic-bezier to get smoother effect
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

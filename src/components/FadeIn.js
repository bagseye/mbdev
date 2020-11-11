import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const FadeIn = ({ children, thresVal, transVal }) => {
  const [ref, inView] = useInView({
    threshold: thresVal || '0.35',
  });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0.15,
        transition: transVal || '0.5s',
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

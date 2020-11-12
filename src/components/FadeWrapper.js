import React from 'react';
import { motion } from 'framer-motion';
import { TransitionState } from 'gatsby-plugin-transition-link';

export const FadeWrapper = ({ children }) => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <motion.div
          transition={{ duration: 0.5 }}
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {children}
        </motion.div>
      )}
    </TransitionState>
  );
};

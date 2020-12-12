import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { TransitionState } from 'gatsby-plugin-transition-link';
import MenuContext from './MenuContext';

export const FadeWrapper = ({ children }) => {
  const [isOpen, setNav] = useContext(MenuContext);

  const variants = {
    visible: {
      transition: {
        opacity: {
          duration: 0.5,
        },
      },
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        opacity: {
          duration: 0.5,
        },
      },
    },
  };
  return (
    <TransitionState>
      {({ transitionStatus, mount }) => {
        console.log(mount);
        return (
          <motion.div
            initial="hidden"
            animate={mount ? 'visible' : 'hidden'}
            variants={variants}
          >
            {children}
          </motion.div>
        );
      }}
    </TransitionState>
  );
};

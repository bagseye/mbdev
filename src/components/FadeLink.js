import React from 'react';
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';

const FadeLink = ({ children, linkClass, linkTo }) => {
  console.log(typeof linkClass);
  return (
    <TransitionLink
      className={linkClass && linkClass}
      to={linkTo}
      exit={{ length: 0.4 }}
      entry={{ delay: 0.5 }}
    >
      {children}
    </TransitionLink>
  );
};

export default FadeLink;

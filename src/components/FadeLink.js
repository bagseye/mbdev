import React from 'react';
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';

const FadeLink = ({ children, linkClass, linkTo }) => (
  <TransitionLink
    className={linkClass && linkClass}
    to={linkTo}
    exit={{ length: 0.7 }}
    entry={{ delay: 0.7 }}
  >
    {children}
  </TransitionLink>
);

export default FadeLink;

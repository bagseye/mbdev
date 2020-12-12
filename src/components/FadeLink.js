import React from 'react';
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';

const FadeLink = ({ children, linkClass, linkTo }) => (
  <TransitionLink
    className={linkClass && linkClass}
    to={linkTo}
    exit={{ length: 0.75, delay: 0.35 }}
    entry={{ length: 0.75, delay: 0.75 }}
  >
    {children}
  </TransitionLink>
);

export default FadeLink;

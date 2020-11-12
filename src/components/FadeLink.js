import React from 'react';
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';

const FadeLink = ({ children, linkTo }) => {
  const pageOutAni = function (node) {
    node.style.transition = '0.75s';
    setTimeout(() => {
      node.style.opacity = 0;
    }, 100);
  };

  const pageInAni = function (node) {
    node.style.transition = '0.75s';
    node.style.opacity = 0;

    setTimeout(() => {
      node.style.opacity = 1;
    }, 500);
  };

  return (
    <TransitionLink
      exit={{
        trigger: ({ node }) => pageOutAni(node),
        length: 1,
      }}
      entry={{
        trigger: ({ node }) => pageInAni(node),
        delay: 0.75,
      }}
      to={linkTo}
    >
      {children}
    </TransitionLink>
  );
};

export default FadeLink;

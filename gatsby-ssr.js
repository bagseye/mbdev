import React from "react";
import { MenuProvider } from "./src/components/MenuContext";
import { AnimatePresence } from "framer-motion";

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>;
}

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // transition duration from `layout.js` * 1000 to get time in ms
  // * 2 for exit + enter animation
  const TRANSITION_DELAY = 0.3 * 1000 * 2;

  // If its a normal route
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY);
  }

  // If we used the browsers forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];

    window.setTimeout(
      () => window.scrollTo(...savedPosition),
      TRANSITION_DELAY
    );
  }

  return false;
};

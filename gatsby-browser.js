import React from "react";
import { MenuProvider } from "./src/components/MenuContext";
import { AnimatePresence } from "framer-motion";
import { silentAuth } from "./src/utils/auth";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

class SessionCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  handleCheckSession = () => {
    this.setState({ loading: false });
  };

  componentDidMount() {
    silentAuth(this.handleCheckSession);
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    );
  }
}

export function wrapRootElement({ element }) {
  return (
    <SessionCheck>
      <MenuProvider>{element}</MenuProvider>
    </SessionCheck>
  );
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
  const TRANSITION_DELAY = 0.5 * 1000 * 2;

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

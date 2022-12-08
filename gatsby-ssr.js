import React from "react";
import { MenuProvider } from "./src/components/MenuContext";
import { AnimatePresence } from "framer-motion";

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
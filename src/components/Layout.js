import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { motion } from "framer-motion";
import Header from "./Header/Header";
import MenuButton from "./Header/MenuButton";
import Footer from "./Footer/Footer";
import "@fontsource/cormorant/400.css";
import "@fontsource/cormorant/400-italic.css";
import "@fontsource/cormorant/600.css";
import "@fontsource/cormorant/600-italic.css";

const Layout = (props) => {
  return (
    <>
      <GlobalStyles />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Header>
          <MenuButton />
        </Header>
        <div id="main">
          {props.children}
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default Layout;

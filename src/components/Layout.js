import React from "react";
import { Link } from "gatsby";
import { GlobalStyles } from "../styles/GlobalStyles";
import Header from "./Header/Header";
import MenuButton from "./Header/MenuButton";
import Footer from "./Footer";
import "@fontsource/cormorant/400.css";
import "@fontsource/cormorant/400-italic.css";
import "@fontsource/cormorant/600.css";
import "@fontsource/cormorant/600-italic.css";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <MenuButton />
      </Header>
      <Link className="quote__request" to="/request-quote">
        <span>Get a quote</span>
      </Link>
      <div id="main">
        {children}

        <Footer />
      </div>
    </>
  );
};

export default Layout;

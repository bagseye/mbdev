import React from "react";
import { Link } from "gatsby";
import { GlobalStyles } from "../styles/GlobalStyles";
import { motion } from "framer-motion";
import Header from "./Header/Header";
import MenuButton from "./Header/MenuButton";
import Footer from "./Footer/Footer";
import CookieConsent from "react-cookie-consent";
import "@fontsource/inter";

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
        <CookieConsent
          location="bottom"
          buttonText="I Understand"
          cookieName="morganBakerDevCookie"
          expires={150}
          style={{
            background: "#1c1b1b",
            padding: "calc(var(--gridGap) / 2)",
            fontSize: "1rem",
            boxShadow: "0px -5px 15px 1px rgba(0,0,0,0.45)",
          }}
          buttonStyle={{
            padding: "15px 20px",
            color: "#1c1b1b",
            backgroundColor: "#fff",
            fontSize: "1rem",
          }}
        >
          This website uses cookies to help improve your experience. By using
          this site you agree to the webiste{" "}
          <Link to="/privacy" style={{ color: "#fff" }}>
            privacy statement
          </Link>
          .
        </CookieConsent>
      </motion.div>
    </>
  );
};

export default Layout;

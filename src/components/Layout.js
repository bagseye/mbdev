import React, { useContext } from "react";
import MenuButton from "./Header/MenuButton";
import Footer from "./Footer";
import Header from "./Header/Header";
import MenuContext from "./MenuContext";
import "@fontsource/inter";
import "@fontsource/cormorant";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children }) => {
  // Access state globally using context
  const [isOpen, setNav] = useContext(MenuContext);

  return (
    <>
      <GlobalStyles />
      <Header>
        <MenuButton />
      </Header>
      <div
        id="main"
        style={{
          transitionDuration: "0.75s",
          transitionDelay: !isOpen ? "1s" : null,
          opacity: isOpen ? 0 : 1,
        }}
      >
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

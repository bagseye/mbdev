import React from "react";
import MenuButton from "./Header/MenuButton";
import Footer from "./Footer";
import Header from "./Header/Header";
// import MenuContext from "./MenuContext";
import "@fontsource/cormorant/400.css";
import "@fontsource/cormorant/600.css";
import "@fontsource/cormorant/600-italic.css";
import GlobalStyles from "../styles/GlobalStyles";

const Layout = ({ children }) => {
  // Access state globally using context
  // const [isOpen] = useContext(MenuContext);

  return (
    <>
      <GlobalStyles />
      <Header>
        <MenuButton />
      </Header>
      <div id="main">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;

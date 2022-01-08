import React, { useContext } from "react";
import { Link } from "gatsby";
import MenuContext from "../MenuContext";
import { motion } from "framer-motion";
import { LogoGlobalStyles } from "./HeaderStyles";

const logoVariants = {
  open: {
    color: "var(--background)",
    transition: {
      delay: 0.75,
    },
  },
  closed: {
    color: "var(--primary)",
    transition: {
      delay: 0.65,
    },
  },
};

const Logo = () => {
  // Access state globally using context
  const [isOpen] = useContext(MenuContext);

  return (
    <LogoGlobalStyles>
      <Link to="/">
        <motion.span
          variants={logoVariants}
          animate={isOpen ? "open" : "closed"}
        >
          Morgan Baker
        </motion.span>
        <span className="alt">Development</span>
      </Link>
    </LogoGlobalStyles>
  );
};

export default Logo;

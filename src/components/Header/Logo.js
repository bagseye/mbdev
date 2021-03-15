import React, { useContext } from "react";
import styled from "styled-components";
import FadeLink from "../FadeLink";
import MenuContext from "../MenuContext";
import { motion } from "framer-motion";

const LogoCont = styled.div`
  letter-spacing: -1px;
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  z-index: 5;
  margin-right: auto;

  a {
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.5s ease;
  }

  @media (min-width: 768px) {
    font-size: 18px;

    br {
      display: none;
    }

    span:nth-child(1) {
      margin-right: 5px;
    }
  }

  @media (min-width: 834px) {
    font-size: 20px;
  }

  @media (min-width: 1600px) {
    font-size: 22px;
  }

  &:hover {
    a {
      opacity: 0.5;
    }
  }
`;

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
    <LogoCont>
      <FadeLink linkTo="/">
        <motion.span
          variants={logoVariants}
          animate={isOpen ? "open" : "closed"}
        >
          Morgan Baker
        </motion.span>
        <br />
        <span
          className="alt"
          style={{
            color: "var(--highlight)",
            fontStyle: "italic",
            fontWeight: "600",
          }}
        >
          Developer
        </span>
      </FadeLink>
    </LogoCont>
  );
};

export default Logo;

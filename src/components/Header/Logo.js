import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import MenuContext from "../MenuContext";
import { motion } from "framer-motion";

const LogoCont = styled.div`
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  z-index: 5;
  margin-right: auto;
  order: 1;
  flex: 1 0 70%;
  letter-spacing: -0.05em;

  @media (min-width: 1024px) {
    flex: 0 0 auto;
  }

  a {
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.5s ease;
    color: #fff;
  }

  span:nth-child(1) {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
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
      <Link to="/">
        <motion.span
          variants={logoVariants}
          animate={isOpen ? "open" : "closed"}
        >
          Morgan Baker
        </motion.span>
        <span
          className="alt"
          style={{
            color: "var(--highlight)",
            fontWeight: "300",
          }}
        >
          Developer
        </span>
      </Link>
    </LogoCont>
  );
};

export default Logo;

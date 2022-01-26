import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { motion } from "framer-motion";
import { mainLinks as menuItems, serviceLinks } from "../../constants/links";
import MenuContext from "../MenuContext";
import useFeaturedProjects from "../../hooks/use-featured-projects";

const menuVariants = {
  open: {
    width: "100%",
    transition: {
      width: { duration: 0.4, delay: 0.75, velocity: -50, stiffness: 500 },
    },
  },
  closed: {
    width: "0%",
    transition: {
      width: { duration: 0.4, delay: 0.5 },
    },
  },
};

const listVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 1.25,
    },
  },
  closed: {
    opacity: 0,
  },
};

const SideMenuStyles = styled(motion.div)`
  height: 100%;
  width: 0%;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  padding: 70px 0;
  background-color: var(--primary);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    padding-top: 140px;
  }

  .container {
    padding: 0 var(--gridGap);
    max-width: 1500px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-start;
      gap: calc(var(--gridGap) * 2);
    }
  }

  .menu__title {
    text-transform: uppercase;
    font-size: 0.813rem;
    color: rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding-top: var(--gridGap);
    padding-bottom: 10px;
    font-weight: 500;
    letter-spacing: 0.15rem;
    font-family: var(--sansSerif);
    list-style: none;
  }

  ul {
    padding: 0;
    margin: 0;
    padding: 0;
    box-sizing: content-box;

    @media (min-width: 768px) {
      flex: 0 0 calc(100% / 3);
      box-sizing: border-box;
      gap: var(--gridGap);
    }
  }

  li a {
    display: inline-block;
    font-size: var(--paragraph);
    font-weight: 700;
    list-style: none;
    color: var(--background);
    letter-spacing: -0.05rem;
    padding-top: 20px;
    text-decoration: none;
    text-transform: capitalize;
    transition: color 0.75s ease;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: var(--h2);
    }

    &:hover {
      cursor: pointer;
      color: var(--accent);
    }
  }
`;

const SideMenu = () => {
  // Access state globally using context
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  const featuredProjects = useFeaturedProjects();

  return (
    <SideMenuStyles
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
    >
      <div className="container">
        <motion.ul variants={listVariants} animate={isOpen ? "open" : "closed"}>
          <li className="menu__title">Services</li>
          {serviceLinks.map((item, index) => (
            <li onClick={toggleNav} key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
          <li className="menu__title">Completed Projects</li>
          <li onClick={toggleNav}>
            <Link to="/projects">All Projects</Link>
          </li>
          {featuredProjects.map((node, index) => {
            return (
              <li onClick={toggleNav} key={index}>
                <Link to={node.gatsbyPath}>{node.name}</Link>
              </li>
            );
          })}
        </motion.ul>

        <motion.ul variants={listVariants} animate={isOpen ? "open" : "closed"}>
          <li className="menu__title">Get in touch</li>
          <li onClick={toggleNav}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/request-quote">Request a Quote</Link>
          </li>
          <li className="menu__title">About the Developer</li>
          {menuItems.map((item, index) => (
            <li onClick={toggleNav} key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
          <li className="menu__title">For Employers</li>
          <li onClick={toggleNav}>
            <Link to="/dashboard">Dashboard Login</Link>
          </li>
        </motion.ul>
      </div>
    </SideMenuStyles>
  );
};

export default SideMenu;

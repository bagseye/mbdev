import React from "react";
import styled from "styled-components";
import { VscGithub as GitIcon } from "react-icons/vsc";
import { BsEnvelope as MailIcon } from "react-icons/bs";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { getUser, isLoggedIn, logout } from "../../services/auth";
import { HeaderIcon } from "../../styles/IconStyles";
import FadeLink from "../FadeLink";

const HeaderStyles = styled.header`
  padding: 0 var(--gridGap);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  z-index: 20;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1600px;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const Header = ({ children }) => (
  <>
    <HeaderStyles>
      <Logo />
      <HeaderIcon>
        <a
          href="https://github.com/bagseye"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitIcon />
        </a>
      </HeaderIcon>
      {/* <HeaderIcon>
        <FadeLink linkTo="/dashboard/login">
          <UserIcon />
        </FadeLink>
      </HeaderIcon> */}
      <HeaderIcon>
        <FadeLink linkTo="/contact">
          <MailIcon />
        </FadeLink>
      </HeaderIcon>
      {children}
    </HeaderStyles>
    <SideMenu />
  </>
);

export default Header;

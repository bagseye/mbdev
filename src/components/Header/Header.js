import React from 'react';
import styled from 'styled-components';
import { BsEnvelope as MailIcon } from 'react-icons/bs';
import { AiOutlineUser as UserIcon } from 'react-icons/ai';
import Logo from './Logo';
import SideMenu from './SideMenu';
import { getUser, isLoggedIn, logout } from '../../services/auth';
import { HeaderIcon } from '../../styles/IconStyles';
import FadeLink from '../FadeLink';

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

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: var(--gridGap);
    height: 1px;
    width: calc(100% - 30px);
    background-color: rgba(255, 255, 255, 0.15);

    @media (min-width: 414px) {
      width: calc(100% - 40px);
    }

    @media (min-width: 834px) {
      width: calc(100% - 60px);
    }

    @media (min-width: 1600px) {
      width: calc(100% - 80px);
    }
  }
`;

const Header = ({ children }) => (
  <>
    <HeaderStyles>
      <Logo />
      <HeaderIcon>
        <FadeLink linkTo="/dashboard/login">
          <UserIcon />
        </FadeLink>
      </HeaderIcon>
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

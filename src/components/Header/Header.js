import React from 'react';
import styled from 'styled-components';
import { BsEnvelope as MailIcon } from 'react-icons/bs';
import { Link } from 'gatsby';
import Logo from './Logo';
import SideMenu from './SideMenu';

const Container = styled.header`
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

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 10;

    @media (min-width: 768px) {
      grid-column: 6 / 7;
    }
  }
`;

const Mail = styled(Link)`
  width: 30px;
  height: 30px;
  font-size: 22px;
  color: #777;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-right: 20px;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 834px) {
    padding: 2px;
    margin-right: 25px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Header = ({ children, status }) => (
  <>
    <Container>
      <Logo status={status} />
      <Mail to="/contact">
        <MailIcon />
      </Mail>
      {children}
    </Container>
    <SideMenu status={status} />
  </>
);

export default Header;

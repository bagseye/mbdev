import React from 'react';
import styled from 'styled-components';
import Grid from '../Grid';
import Logo from './Logo';
import SideMenu from './SideMenu';

const Container = styled.header`
  padding: 0 var(--gridGap);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  height: 60px;
  display: flex;
  align-items: center;

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
  }

  button {
    background-color: transparent;
    border: none;
    grid-column: 5 / 7;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    z-index: 10;

    @media (min-width: 768px) {
      grid-column: 6 / 7;
    }
  }
`;

const Header = ({ children, status }) => (
  <>
    <Container>
      <Grid>
        <Logo status={status} />
        {children}
      </Grid>
    </Container>
    <SideMenu status={status} />
  </>
);

export default Header;

import React from "react"
import styled from "styled-components"
import Grid from "../Grid"
import Logo from "./Logo"
import SideMenu from "./SideMenu"

const Container = styled.header`
  padding: var(--gridGap);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;

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
`

const Header = ({ children, status }) => {
  return (
    <>
      <Container>
        <Grid>
          <Logo status={status} />
          {children}
        </Grid>
      </Container>
      <SideMenu status={status} />
    </>
  )
}

export default Header

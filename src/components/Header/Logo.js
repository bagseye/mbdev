import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LogoCont = styled(Link)`
  font-weight: 700;
  letter-spacing: -1px;
  margin: 0;
  transition: opacity 0.5s ease;
  font-size: 18px;
  z-index: 5;
  grid-column: 1 / 4;
  text-decoration: none;

  @media (min-width: 414px) {
    grid-column: 1 / 3;
  }

  @media (min-width: 834px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
  }

  &:hover {
    opacity: 0.5;
  }
`

const Logo = ({ status }) => {
  return (
    <LogoCont to="/">
      <span
        style={{
          color: status ? "var(--charcoal)" : "#fff",
          transition: "color 0.5s ease",
        }}
      >
        Morgan Baker
      </span>
      <br />
      <span style={{ color: "#777" }}>Developer</span>
    </LogoCont>
  )
}

export default Logo

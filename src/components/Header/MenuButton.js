import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  border: none;
  transition: opacity 0.5s ease, color 0.5s ease;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -1px;

  @media (min-width: 834px) {
    font-size: 20px;
  }

  @media (min-width: 1600px) {
    font-size: 22px;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`

const MenuButton = ({ status }) => {
  return (
    <>
      <Container
        style={{
          color: status ? "var(--charcoal)" : "#fff",
        }}
      >
        {status ? "Close" : "Menu"}
      </Container>
    </>
  )
}

export default MenuButton

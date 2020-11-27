import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  border: none;
  transition: opacity 0.5s ease, color 0.5s ease;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -1px;
  display: flex;
  align-items: center;

  .burger {
    position: relative;
    height: 30px;
    width: 30px;
    margin-left: 15px;

    span {
      width: 30px;
      height: 1px;
      background-color: #777;
      left: 0;
      transition: opacity 0.5s ease, transform 0.3s ease, top 0.3s ease,
        bottom 0.3s ease;

      &:nth-child(1) {
        position: absolute;
        transform: rotate(0);
        top: 20%;
      }

      &:nth-child(2) {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-child(3) {
        position: absolute;
        bottom: 20%;
      }
    }

    &.burger-open {
      span {
        &:nth-child(1) {
          transform: rotate(45deg);
          top: 15px;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 15px;
        }
      }
    }
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

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const MenuButton = ({ status }) => (
  <>
    <Container
      style={{
        color: status ? 'var(--charcoal)' : '#fff',
      }}
    >
      {status ? 'Close' : 'Menu'}
      <div className={status ? 'burger burger-open' : 'burger'}>
        <span />
        <span />
        <span />
      </div>
    </Container>
  </>
);

export default MenuButton;

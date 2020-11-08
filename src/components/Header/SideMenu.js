import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import menuItems from '../../constants/links';

const Cont = styled.div`
  height: 100%;
  width: 100%;
  padding: 140px var(--gridGap) 0 var(--gridGap);
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: transform 0.5s ease;
  background-color: #fff;
  transform: translateX(-100vw);

  ul {
    max-width: 1600px;
    padding-left: 0;
    margin: 0 auto;
    transition: opacity 0.5s ease;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: var(--gridGap);
  }

  li {
    list-style: none;
    font-weight: 700;
    letter-spacing: var(--titleLargeLetterSpacing);
    font-size: var(--titleLarge);
    grid-column: 1 / 7;
    border-top: var(--borderLarge) solid var(--background);
    padding-top: 20px;
    margin-bottom: 50px;
    line-height: var(--titleLargeLineHeight);

    a {
      text-decoration: none;
      text-transform: capitalize;
      color: var(--background);
      font-weight: 700;
      transition: opacity 0.75s ease;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  @media (min-width: 414px) {
    padding-top: 160px;

    li {
      margin-bottom: 60px;
    }
  }

  @media (min-width: 768px) {
    li {
      margin-bottom: 220px;

      &:nth-child(odd) {
        grid-column: 1 / 4;
      }

      &:nth-child(even) {
        grid-column: 4 / 7;
      }
    }
  }

  @media (min-width: 834px) {
    padding-top: 200px;
  }

  @media (min-width: 1152px) {
    li {
      &:nth-child(1),
      &:nth-child(4) {
        grid-column: 1 / 3;
      }

      &:nth-child(2),
      &:nth-child(5) {
        grid-column: 3 / 5;
      }

      &:nth-child(3),
      &:nth-child(6) {
        grid-column: 5 / 7;
      }
    }
  }

  @media (min-width: 1600px) {
    padding-top: 230px;
  }
`;

const SideMenu = ({ status }) => (
  <Cont style={{ transform: status ? 'translateX(0)' : 'translateX(-100vw)' }}>
    <ul style={{ opacity: status ? '1' : '0' }}>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
  </Cont>
);

export default SideMenu;

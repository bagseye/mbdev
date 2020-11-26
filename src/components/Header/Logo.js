import React from 'react';
import styled from 'styled-components';
import FadeLink from '../FadeLink';

const LogoCont = styled.div`
  letter-spacing: -1px;
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  z-index: 5;
  grid-column: 1 / 4;

  a {
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.5s ease;
  }

  @media (min-width: 414px) {
    grid-column: 1 / 3;
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

  &:hover {
    a {
      opacity: 0.5;
    }
  }
`;

const Logo = ({ status }) => (
  <LogoCont>
    <FadeLink linkTo="/">
      <span
        style={{
          color: status ? 'var(--charcoal)' : '#fff',
          transition: 'color 0.5s ease',
        }}
      >
        Morgan Baker
      </span>
      <br />
      <span className="alt" style={{ color: '#777', fontWeight: '300' }}>
        Developer
      </span>
    </FadeLink>
  </LogoCont>
);

export default Logo;

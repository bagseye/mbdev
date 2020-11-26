import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  grid-gap: 0 var(--gridGap);
  width: 100%;
`;

const Grid = ({ children }) => <Container>{children}</Container>;

export default Grid;

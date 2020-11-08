import React from 'react';
import styled from 'styled-components';

const GeneralContentStyles = styled.div`
  border-top: 2px solid #fff;
  width: 100%;
`;

const GeneralContent = ({ children }) => (
  <GeneralContentStyles>{children}</GeneralContentStyles>
);

export default GeneralContent;

import styled from "styled-components";

export const HeaderIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin-right: 5px;
  transition: opacity 0.5s ease;

  @media (min-width: 375px) {
    margin-right: 20px;
  }

  a {
    color: var(--charcoal);
  }

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

import styled from "styled-components";
import { Link } from "gatsby";

export const ButtonGlobalStyles = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 0.813rem;
  font-weight: 500;
  letter-spacing: 0.15rem;
  font-family: var(--sansSerif);
  text-decoration: none;
  padding: 16px var(--gridGap);
  border-radius: 4px;
  background-color: var(--accent);
  border: none;
  border-bottom: 2px solid var(--accent);
  transition: background-color 0.3s ease, color 0.3s ease,
    border-bottom 0.3s ease;
  margin-top: var(--gridGap);
  margin-bottom: var(--gridGap);
  cursor: pointer;
  min-width: 150px;

  @media (min-width: 834px) {
    font-size: 0.9rem;
  }

  svg {
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  &:hover {
    /* border-bottom: 2px solid var(--accentHover); */
    /* color: var(--accent); */
    background-color: rgb(187, 48, 252);

    svg {
      transform: translateX(5px);
    }
  }
`;

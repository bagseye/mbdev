import styled from "styled-components";
import { Link } from "gatsby";

export const ButtonGlobalStyles = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 0.813em;
  font-weight: 400;
  letter-spacing: 0.15rem;
  font-family: var(--sansSerif);
  text-decoration: none;
  padding: 16px var(--gridGap);
  border-radius: 3em;
  background-color: var(--accent);
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-bottom 0.3s ease;
  margin-top: var(--gridGap);
  margin-bottom: var(--gridGap);
  cursor: pointer;
  min-width: 150px;

  svg {
    margin-left: 0.35rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: rgb(187, 48, 252);

    svg {
      transform: translateX(0.25rem);
    }
  }
`;

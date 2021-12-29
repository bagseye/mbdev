import styled from "styled-components";
import { Link } from "gatsby";

export const ButtonGlobalStyles = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  color: #fff;
  font-size: var(--paragraph);
  font-weight: 700;
  font-family: var(--sansSerif);
  text-decoration: none;
  padding: 18px 20px;
  border-radius: 4px;
  background-color: rgba(142, 45, 226, 1);
  border: 2px solid rgba(142, 45, 226, 1);
  transition: background-color 0.3s ease;
  margin-top: var(--gridGap);
  margin-bottom: var(--gridGap);
  cursor: pointer;

  &:hover {
    background-color: rgba(142, 45, 226, 0.25);
  }
`;

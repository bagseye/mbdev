import styled from "styled-components";

export const FooterStyles = styled.footer`
  padding: calc(var(--gridGap) * 2) var(--gridGap);

  ul {
    margin: 0 0 var(--gridGap) 0;
    padding: 0;
    list-style: none;
    text-transform: capitalize;

    li {
      padding: 5px 0;
      font-size: 1.4rem;
    }
  }
`;

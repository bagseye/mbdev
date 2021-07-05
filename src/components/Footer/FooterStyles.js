import styled from "styled-components";

export const FooterStyles = styled.footer`
  padding: calc(var(--gridGap) * 2) var(--gridGap);

  .container {
    @media (min-width: 600px) {
      display: flex;
      flex-wrap: wrap;
    }

    .col {
      flex-grow: 0;
      padding-right: var(--gridGap);
    }

    .col__full {
      flex: 0 0 100%;
    }
  }

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

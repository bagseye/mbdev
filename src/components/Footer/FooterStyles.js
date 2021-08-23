import styled from "styled-components";

export const FooterStyles = styled.footer`
  padding: calc(var(--gridGap) * 2) var(--gridGap);

  .container {
    @media (min-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      gap: var(--gridGap);
    }

    .col {
      flex-grow: 0;
      padding-right: var(--gridGap);
    }

    .col__full {
      flex: 0 0 100%;

      @media (prefers-color-scheme: dark) {
        a {
          color: #fff;
        }
      }
    }
  }

  ul {
    margin: 0 0 var(--gridGap) 0;
    padding: 0;
    padding-left: var(--gridGap);
    list-style: none;
    text-transform: capitalize;
    border-left: 1px solid rgba(0, 0, 0, 0.1);

    @media (prefers-color-scheme: dark) {
      border-left-color: rgba(255, 255, 255, 0.1);
    }

    li {
      padding: 5px 0;
      font-size: 1.4rem;

      @media (prefers-color-scheme: dark) {
        a {
          color: #fff;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const FooterStyles = styled.footer`
  padding: calc(var(--gridGap) * 2) 0;

  .container {
    @media (min-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      gap: var(--gridGap);
    }

    .col {
      flex-grow: 0;
      padding-right: var(--gridGap);

      &__contact {
        @media (min-width: 1024px) {
          margin-left: auto;
          margin-right: 0;
        }
      }
    }

    .col__full {
      flex: 0 0 100%;

      a {
        color: #fff;
      }
    }
  }

  ul {
    margin: 0 0 var(--gridGap) 0;
    padding: 0;
    list-style: none;
    text-transform: capitalize;

    li {
      padding: 5px 0;

      a {
        color: #fff;
        font-weight: 700;
      }
    }
  }

  address {
    font-style: normal;
    margin-top: calc(var(--gridGap) * 4);
    margin-bottom: calc(var(--gridGap) * 4);
    line-height: 1.4;

    @media (min-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

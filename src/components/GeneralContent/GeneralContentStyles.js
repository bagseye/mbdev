import styled from "styled-components";

export const GeneralContentStyles = styled.section`
  margin-top: calc(var(--gridGap) * 3);
  margin-bottom: calc(var(--gridGap) * 3);
  padding: 0 var(--gridGap);

  .container {
    max-width: 1500px;
  }

  .col {
    grid-column: 1 / 7;

    @media (min-width: 768px) {
      grid-column: 1 / 5;
    }

    > * {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

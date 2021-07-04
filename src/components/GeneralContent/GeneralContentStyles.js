import styled from "styled-components";

export const GeneralContentStyles = styled.section`
  margin-top: calc(var(--gridGap) * 3);
  margin-bottom: calc(var(--gridGap) * 3);
  padding: 0 var(--gridGap);
  .container {
    max-width: 1500px;

    @media (min-width: 600px) {
      display: flex;
    }
  }

  .col {
    &:nth-of-type(1) {
      padding-right: var(--gridGap);

      @media (min-width: 600px) {
        width: 45%;
        flex-grow: 1;
        max-width: 55%;
      }
    }

    &:nth-of-type(2) {
      @media (min-width: 600px) {
        width: 55%;
      }
    }
  }

  h2 {
    font-size: 1.7rem;
    line-height: 1.1;
    margin-top: 0;

    @media (min-width: 600px) {
      font-size: 2.7rem;
    }
  }
`;

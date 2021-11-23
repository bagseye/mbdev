import styled from "styled-components";

export const QuoteCtaStyles = styled.section`
  background-color: #000;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: calc(var(--gridGap) * 1.5);
  padding: calc(var(--gridGap) * 1.5);
  position: relative;

  @media (min-width: 768px) {
    margin-top: calc(var(--gridGap) * 3);
    padding: calc(var(--gridGap) * 3);
  }

  .cont {
    position: relative;
    z-index: 2;
    max-width: 500px;
    > * {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  h2 {
    font-size: var(--h2);
  }

  p {
    font-size: var(--leadIn);
  }

  .media {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .gatsby-image-wrapper {
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

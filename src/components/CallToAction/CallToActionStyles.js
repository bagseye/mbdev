import styled from "styled-components";

export const CallToActionStyles = styled.section`
  padding: calc(var(--gridGap) * 3) var(--gridGap);
  background-color: #000;
  position: relative;

  .cta__img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: 0.6;
    background-blend-mode: multiply;
  }

  .container {
    max-width: 1500px;
    position: relative;
    z-index: 2;

    @media (min-width: 600px) {
      display: flex;
    }
  }

  .col {
    /* &:nth-of-type(1) { */
    padding-right: var(--gridGap);

    @media (min-width: 600px) {
      width: 45%;
    }
    /* } */

    /* &:nth-of-type(2) {
      @media (min-width: 600px) {
        width: 55%;
      }
    } */
  }

  h2 {
    font-size: 2.2rem;
    line-height: 1.1;
    margin-top: 0;
    color: #fff;
    margin-bottom: calc(var(--gridGap) / 2);

    @media (min-width: 600px) {
      font-size: 2.7rem;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 1.2;
    margin-bottom: calc(var(--gridGap) * 1.5);
    color: #fff;
  }
`;

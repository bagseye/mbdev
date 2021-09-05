import styled from "styled-components";

export const CallToActionStyles = styled.section`
  padding: calc(var(--gridGap) * 3) var(--gridGap);
  background: ${(props) => (props.noImage ? "var(--background)" : "#000")};
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

    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 50%;
      ${(props) => (props.orientation === "left" ? "left: 0;" : null)}
      ${(props) => (props.orientation === "right" ? "right: 0;" : null)}
      top: 0;
      bottom: 0;
      ${(props) =>
        props.orientation === "left"
          ? "background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);"
          : null};
      ${(props) =>
        props.orientation === "right"
          ? "background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);"
          : null};
      z-index: 1;
    }
  }

  .container {
    max-width: 1500px;
    position: relative;
    z-index: 2;

    @media (min-width: 600px) {
      display: flex;

      &.align__center {
        justify-content: center;

        .col {
          text-align: center;
        }
      }

      &.align__left {
        justify-content: flex-start;

        .col {
          text-align: left;
        }
      }

      &.align__right {
        justify-content: flex-end;

        .col {
          text-align: right;
        }
      }
    }
  }

  .col {
    padding-right: var(--gridGap);

    @media (min-width: 600px) {
      width: 45%;
    }
  }

  h2 {
    font-size: 2.2rem;
    line-height: 1.1;
    margin-top: 0;
    color: #fff;
    margin-bottom: calc(var(--gridGap) / 2);
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);

    @media (min-width: 600px) {
      font-size: 2.7rem;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 1.2;
    margin-bottom: calc(var(--gridGap) * 1.5);
    color: #fff;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
  }
`;

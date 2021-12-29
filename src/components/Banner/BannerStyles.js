import styled from "styled-components";

export const BannerGlobalStyles = styled.section`
  position: relative;
  padding-left: var(--gridGap);
  padding-right: var(--gridGap);

  .container {
    position: relative;
    padding: calc(var(--gridGap) * 8) 0 calc(var(--gridGap) * 5) 0;
    z-index: 1;

    @media (min-width: 768px) {
      padding-top: calc(var(--gridGap) * 7);
    }

    .content__area {
      max-width: 500px;

      @media (min-width: 768px) {
        max-width: 750px;
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
  }

  .banner__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

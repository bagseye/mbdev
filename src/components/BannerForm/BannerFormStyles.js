import styled from "styled-components";

export const BannerFormGlobalStyles = styled.section`
  position: relative;
  padding-left: var(--gridGap);
  padding-right: var(--gridGap);

  .container {
    position: relative;
    padding: calc(var(--gridGap) * 8) 0 calc(var(--gridGap) * 5) 0;
    z-index: 1;
    max-width: calc(1500px - (var(--gridGap) * 2));
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 768px) {
      padding-top: calc(var(--gridGap) * 7);
    }

    @media (min-width: 1200px) {
      flex-wrap: wrap;
      flex-direction: row;
    }

    &__content {
      max-width: 540px;

      @media (min-width: 1200px) {
        position: sticky;
        top: 120px;
      }

      h1,
      h2 {
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
      }

      h2 {
        font-size: var(--leadIn);
      }
    }

    &__form {
      flex-grow: 1;
      background-color: var(--background);
      border-radius: 8px;
      padding: var(--gridGap);
      box-shadow: 0px 12px 55px 5px rgba(142, 45, 226, 0.3);
      border: 1px solid rgba(142, 45, 226, 0.45);
      > div {
        margin-top: 0;
      }

      .form__title {
        h2 {
          margin-top: 0;
          margin-bottom: 0;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-size: 16px;

        .area {
          margin-top: 0;
          margin-bottom: 0;
          display: flex;
          flex-direction: column;
        }

        .form__columns {
          display: flex;
          flex-direction: column;
          gap: 30px;

          @media (min-width: 1400px) {
            flex-direction: row;

            > * {
              width: 50%;
            }
          }

          .form__column--one,
          .form__column--two {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .area {
            label {
              margin-bottom: 10px;
              font-weight: 700;

              sup {
                color: #ff4646;
                font-size: 12px;
                font-style: italic;
                font-weight: 400;
                letter-spacing: 0.5px;
              }
            }
            input,
            textarea {
              font-size: 16px;
              height: 50px;
              border: none;
              border-radius: 4px;
              padding: 8px calc(var(--gridGap) / 2);
            }

            textarea {
              height: 200px;
              font-family: var(--sansSerif);

              @media (min-width: 1400px) {
                height: 255px;
              }
            }
          }
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
    opacity: 0.6;

    .gatsby-image-wrapper {
      height: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 250px;
      background: linear-gradient(
        0deg,
        rgba(28, 27, 27, 1) 0%,
        rgba(28, 27, 27, 0) 100%
      );
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left center;
    }
  }
`;

export const contentAreaVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.35,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const titleVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 25 },
};

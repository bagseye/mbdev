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

    @media (min-width: 768px) {
      padding-top: calc(var(--gridGap) * 7);
    }

    &--content {
      h2 {
        font-size: var(--leadIn);
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

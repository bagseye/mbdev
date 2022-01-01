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

  .scroll__to {
    position: absolute;
    bottom: calc(var(--gridGap) * 2);
    left: 0;
    font-size: 1rem;
    font-weight: 300;
    margin: 0 auto;
    max-width: 1580px;
  }

  .banner__ctas {
    display: flex;
    justify-content: flex-start;
    gap: var(--gridGap);
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

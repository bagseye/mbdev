import styled from "styled-components";

export const BannerGlobalStyles = styled.section`
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
    bottom: calc(var(--gridGap) * 1.5);
    left: 0;
    font-size: 0.813rem;
    font-weight: 500;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    margin: 0;

    svg {
      margin-left: 5px;
    }

    @media (min-width: 834px) {
      font-size: 0.9rem;
    }
  }

  .banner__ctas {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gridGap) 0;
    margin-top: var(--gridGap);
    margin-bottom: calc(var(--gridGap) * 2);

    > * {
      margin: 0;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 0 var(--gridGap);
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

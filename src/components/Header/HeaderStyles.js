import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderGlobalStyles = styled(motion.header)`
  padding: 10px var(--gridGap);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 20;
  display: flex;
  align-items: center;
  max-width: 1500px;
  font-size: 13px;
  height: 75px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: var(--gridGap);
    width: calc(100% - (var(--gridGap) * 2));
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (min-width: 768px) {
    height: 80px;
  }
`;

export const QuickLinksGlobalStyles = styled.div`
  position: absolute;
  height: 50px;
  top: 12px;
  right: 70px;
  display: flex;
  gap: 0 15px;
  align-items: center;

  @media (max-width: 374px) {
    gap: 0 9px;
    right: 64px;
  }

  @media (min-width: 768px) {
    right: 95px;
    gap: 0 35px;
  }

  @media (min-width: 834px) {
    right: 105px;
  }

  @media (min-width: 1600px) {
    right: 115px;
  }

  .headerlink {
    flex-shrink: 0;
    min-width: 40px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    text-transform: uppercase;
    text-decoration: none;

    @media (max-width: 374px) {
      font-size: 10px;
    }

    svg {
      font-size: 30px;
      width: 100%;
      height: 36px;
      padding: 4px;
    }

    span {
      width: 100%;
      height: 14px;
      text-align: center;
    }
  }
`;

export const LogoGlobalStyles = styled.div`
  margin: 0;
  font-size: 14px;
  line-height: 18px;
  z-index: 5;
  margin-right: auto;
  flex: 0 1 auto;
  letter-spacing: -0.05em;

  @media (min-width: 1024px) {
    flex: 0 0 auto;
  }

  a {
    font-weight: 700;
    text-decoration: none;
    transition: opacity 0.5s ease;
    color: #fff;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    span {
      &.alt {
        color: var(--highlight);
        font-weight: 300;
      }
    }
  }

  span:nth-child(1) {
    margin-right: 5px;
    white-space: no-wrap;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 834px) {
    font-size: 21px;
  }

  @media (min-width: 1600px) {
    font-size: 22px;
  }

  &:hover {
    a {
      opacity: 0.5;
    }
  }
`;

export const MenuButtonGlobalStyles = styled(motion.button)`
  border: none;
  transition: opacity 0.5s ease, color 0.5s ease;
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 12px;
  right: var(--gridGap);
  z-index: 101;
  width: 40px;
  height: 50px;

  .burger {
    position: relative;
    text-transform: uppercase;
    width: 40px;
    height: 100%;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 36px;

    @media (max-width: 374px) {
      font-size: 10px;
    }

    span {
      width: 26px;
      height: 2px;
      transition: opacity 0.5s ease, transform 0.3s ease, top 0.3s ease,
        background-color 0.3s ease, bottom 0.3s ease;

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        position: absolute;
      }

      &:nth-child(1) {
        transform: rotate(0);
        top: 9px;
      }

      &:nth-child(2) {
        top: 8px;
        transform: translateY(9px);
      }

      &:nth-child(3) {
        bottom: 23px;
      }
    }

    &.burger-open {
      span {
        &:nth-child(1) {
          transform: rotate(45deg);
          top: 15px;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 33px;
        }
      }
    }
  }

  &:active {
    opacity: 0.5;
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const menuButtonVariants = {
  open: {
    color: "var(--background)",
    transition: {
      delay: 0.5,
    },
  },
  closed: {
    color: "var(--primary)",
    transition: {
      delay: 0.25,
    },
  },
};

export const burgerVariants = {
  open: {
    backgroundColor: "var(--background)",
    transition: {
      delay: 0.65,
    },
  },
  closed: {
    backgroundColor: "var(--primary)",
    transition: {
      delay: 0.25,
    },
  },
};

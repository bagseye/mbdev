import styled from "styled-components";

export const PerksGlobalStyles = styled.section`
  .perks__container {
    margin-bottom: calc(var(--gridGap) * 2);
    margin-top: calc(var(--gridGap) * 2);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gridGap);

    @media (min-width: 760px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1080px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const PerkItemStyles = styled.aside`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: calc(var(--gridGap) * 2) var(--gridGap);

  > svg {
    font-size: 50px;
    margin-bottom: var(--gridGap);
    color: rgba(142, 45, 226, 1);
  }

  @media (min-width: 414px) {
    > svg {
      font-size: 55px;
    }
  }

  @media (min-width: 1600px) {
    > svg {
      font-size: 65px;
    }
  }

  > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

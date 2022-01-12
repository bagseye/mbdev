import styled from "styled-components";

export const PerksGlobalStyles = styled.section`
  padding-left: var(--gridGap);
  padding-right: var(--gridGap);

  .perks__container {
    margin-bottom: calc(var(--gridGap) * 2);
    margin-top: calc(var(--gridGap) * 2);
    display: flex;
    gap: var(--gridGap);
    flex-wrap: wrap;
  }
`;

export const PerkItemStyles = styled.aside`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: calc(var(--gridGap) * 2) var(--gridGap);
  flex: 0 0 100%;

  > svg {
    font-size: 50px;
    margin-bottom: var(--gridGap);
    color: rgba(142, 45, 226, 1);
  }

  @media (min-width: 414px) {
    flex-basis: calc(50% - calc(var(--gridGap) / 2));

    > svg {
      font-size: 55px;
    }
  }

  @media (min-width: 834px) {
    flex-basis: calc(33.333% - 20px);
  }

  @media (min-width: 1600px) {
    flex-basis: calc(33.333% - 27px);

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
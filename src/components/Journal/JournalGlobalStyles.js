import styled from "styled-components";
import { Link } from "gatsby";

export const JournalListStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .intro__area {
    max-width: 500px;
    margin-bottom: var(--sectionGap);

    > * {
      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: 768px) {
      max-width: 750px;
    }

    > h1,
    > h4 {
      margin-top: 0;
    }
  }
`;

export const JournalItemStyles = styled(Link)`
  padding-top: var(--sectionGap);
  padding-bottom: var(--sectionGap);
  display: block;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 500px;
  text-decoration: none;

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

  h2 {
    font-size: var(--titleLarge);
    margin: 0;
    letter-spacing: var(--titleLargeLetterSpacing);
    line-height: var(--titleLargeLineHeight);
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.2);
    text-decoration-thickness: 0.2rem;
    transition: text-decoration-color 0.3s ease;

    @media (min-width: 768px) {
      text-decoration-thickness: 0.35rem;
    }
  }

  .journal__category--title {
    font-size: 0.813rem;
    margin-top: 0;
    color: var(--secondary);
    margin-bottom: 10px;
  }

  .journal__category--list {
    padding: 0;
    margin: 0;
    display: flex;
    gap: calc(var(--gridGap) / 2);

    li {
      list-style: none;
      font-size: 0.813rem;
    }
  }

  &:hover {
    h2 {
      text-decoration-color: rgba(142, 45, 226, 1);
    }
  }
`;

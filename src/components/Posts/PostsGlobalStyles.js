import styled from "styled-components";
import { Link } from "gatsby";

export const PostContainerGlobalStyles = styled.div`
  display: flex;
  gap: 0 var(--gridGap);
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 600px) {
    overflow-x: visible;
    scroll-snap-type: none;
  }

  &.noscroll {
    overflow-x: visible;
    flex-wrap: wrap;
    gap: var(--gridGap);

    > a {
      width: 100%;

      @media (min-width: 600px) {
        width: calc(50% - calc(var(--gridGap) / 2));
      }

      @media (min-width: 768px) {
        width: calc(33.333% - 14px);
      }

      @media (min-width: 834px) {
        width: calc(33.333% - 20px);
      }

      @media (min-width: 1600px) {
        width: calc(33.333% - 27px);
      }
    }
  }
`;

export const PostGlobalStyles = styled(Link)`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  width: calc(100% - 50px);
  flex-shrink: 0;
  padding: calc(var(--gridGap) * 2) var(--gridGap);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: border-color 0.3s;
  scroll-snap-align: center;

  @media (min-width: 600px) {
    width: 33.333%;
    flex-shrink: 1;
  }

  .route,
  .date {
    color: var(--secondary);
  }

  span {
    margin-top: auto;
  }

  > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover {
    border-color: var(--accent);
  }
`;

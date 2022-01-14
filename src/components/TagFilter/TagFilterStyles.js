import styled from "styled-components";

export const TagFilterGlobalStyles = styled.aside`
  margin-top: var(--gridGap);
  margin-bottom: var(--gridGap);
  .tagfilter__container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .tagfilter__item {
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 8px 12px;
    text-decoration: none;
    border-radius: 40px;
    font-size: 13px;
    transition: background-color 0.3s, border-color 0.3s;

    &:hover {
      background-color: var(--accent);
      border-color: var(--accent);
    }
  }

  .tagfilter__count {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #333;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    font-size: 13px;
    margin-left: 6px;
  }
`;

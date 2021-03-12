import React from "react";
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const ProjectContentStyles = styled.div`
  column-count: 2;
  column-gap: var(--gridGap);
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  grid-column: 1 / 7;
  padding-top: var(--margins);
  color: var(--primary);
  margin-bottom: var(--margins);

  > *:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const ProjectContent = ({ raw, options }) => (
  <>
    <ProjectContentStyles>{renderRichText(raw, options)}</ProjectContentStyles>
  </>
);

export default ProjectContent;

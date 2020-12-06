import React from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ProjectContentStyles = styled.div`
  column-count: 2;
  column-gap: var(--gridGap);
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  grid-column: 1 / 7;
  padding-top: var(--margins);
  color: #aaa;
  margin-bottom: var(--margins);

  > *:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const ProjectContent = ({ json, options }) => (
  <>
    <ProjectContentStyles>
      {documentToReactComponents(json, options)}
    </ProjectContentStyles>
  </>
);

export default ProjectContent;

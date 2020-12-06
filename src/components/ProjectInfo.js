import React from 'react';
import styled from 'styled-components';

const Built = styled.div`
  grid-column: 1 / 3;
  font-size: var(--paragraph);
  font-weight: 500;

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const Tech = styled.div`
  color: #aaa;
  grid-column: 3 / 5;
  font-size: var(--paragraph);

  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

const Website = styled.div`
  grid-column: 5 / 7;
  font-size: var(--paragraph);

  @media (min-width: 768px) {
    grid-column: 4 / 5;
  }
`;

const ProjectInfo = ({ technology, website }) => (
  <>
    <Built>Built using</Built>
    {technology && <Tech>{technology}</Tech>}
    <Website>
      <a
        href={website}
        className="link__std"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
    </Website>
  </>
);

export default ProjectInfo;

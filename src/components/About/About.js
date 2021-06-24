import React from "react";
import styled from "styled-components";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const AboutStyles = styled.div`
  padding: 0 var(--gridGap);
  max-width: var(--maxContainer);
  margin: var(--margins) auto;

  section {
    grid-column: 1 / 7;

    p {
      &:nth-of-type(1) {
        margin-top: 0;
        font-size: var(--leadIn);
        font-weight: 500;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 768px) {
    section {
      grid-column: 1 / 5;
    }
  }
`;

const About = ({ content, options }) => (
  <AboutStyles>
    <div className="container-grid">
      <section>
        {content ? (
          renderRichText(content, options)
        ) : (
          <>
            <p>
              When I started in web development my initial thought was that
              great design came from animations and complex layouts. Over time
              my thoughts around this idea have changed. The approach to design
              the people such as Dieter Rams have, that design is for everyone,
              has become an idea that I have ultimately begun to follow.
            </p>
            <p>
              That is not to say that an accessible site lacks any form of
              design. That is far from the truth. Great design comes from a
              great user experience, not from flashy animations, and it is my
              responsibility as a web developer to create inclusive experiences.
            </p>
            <p>
              Access to knowledge is vital for everyone in society, the web and
              it's content should be freely available to all.
            </p>
          </>
        )}
      </section>
    </div>
  </AboutStyles>
);

export default About;

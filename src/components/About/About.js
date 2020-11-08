import React from "react"
import styled from "styled-components"
import Grid from "../Grid"

const Container = styled.div`
  padding: var(--margins) var(--gridGap);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  section {
    grid-column: 1 / 7;
    column-count: 2;
    column-gap: var(--gridGap);

    p {
      font-size: var(--paragraph);
      line-height: var(--paragraphLineHeight);
      margin-top: 0;

      &:nth-child(1) {
        font-weight: 700;
      }

      a {
        text-underline-position: under;
        text-decoration-color: rgba(255, 255, 255, 0.35);
        transition: text-decoration-color 0.75s ease;

        &:hover {
          text-decoration-color: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  @media (min-width: 768px) {

    section {
      grid-column: 1 / 5;
    }
  }
`

const About = ({ id }) => {
  return (
      <Container>
        <Grid>
          <section>
            <p>
              Using{" "}
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GatsbyJS
              </a>{" "}
              I have built, and continue to maintain, a number of open source
              projects that are listed within their official starters library.
            </p>
            <p>
              These starter themes offer the perfect platform for aspiring
              developers, and those looking to start a new business venture. The
              sites offer an app-like experience in the way they deiliver
              content, with a focus on speed.
            </p>
          </section>
        </Grid>
      </Container>
  )
}

export default About

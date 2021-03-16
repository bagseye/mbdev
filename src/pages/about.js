import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Banner from "../components/Banner/Banner";

const BodyContainer = styled.div`
  padding: 0 var(--gridGap);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--margins);
`;

const ContentTitle = styled.div`
  font-weight: 700;
  font-size: var(--paragraph);
  grid-column: 1 / 3;
`;

const Para = styled.div`
  grid-column: 3 / 7;
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    grid-column: 3 / 5;
  }
`;

const Business = styled.div`
  grid-column: 3 / 7;
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    grid-column: 3 / 4;
  }
`;

const Role = styled.div`
  grid-column: 3 / 7;
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);
  margin-bottom: 20px;

  @media (min-width: 768px) {
    grid-column: 4 / 5;
  }
`;

const Border = styled.hr`
  height: var(--borderSmall);
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  grid-column: 1 / 7;
  margin-bottom: 25px;
  margin-top: var(--margins);

  &:first-of-type {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 5;
  }
`;

const aboutPage = () => (
  <>
    <SEO title="About the developer" />
    <Banner heading="About the developer" />
    <BodyContainer>
      <div className="container-grid">
        <Border />
        <ContentTitle>Early career</ContentTitle>
        <Para>
          I'm a frontend web developer with 5+years of agency-based employment
          working in Inverness for projects across Scotland. Working in a
          professional capacity with WordPress/PHP, developing bespoke websites
          that focus on design and fast speeds. On personal projects using the
          Javascript library React through the GatsbyJS framework.
        </Para>
        <Para>
          Professional projects that I have worked on include major timber
          suppliers and luxury accommodation providers across Scotland. At home,
          I have developed and maintain several themes that are listed on the
          Gatsby Starter Library under an open-source licence.
        </Para>
        <Border />
        <ContentTitle>Qualifications</ContentTitle>
        <Para>HND in Interactive Media</Para>
        <Border />
        <ContentTitle>Employment</ContentTitle>
        <Business>
          <a
            className="link__std"
            href="https://www.strutdigital.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strut
          </a>
        </Business>
        <Role>Developer</Role>
        <Border />
        <ContentTitle>Past Employment</ContentTitle>
        <Business>
          <a
            className="link__std"
            href="https://velocity.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Velocity Design
          </a>
        </Business>
        <Role>Developer</Role>
        <Business>
          <a
            className="link__std"
            href="https://www.dynamicedge.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dynamic Edge
          </a>
        </Business>
        <Role>Developer</Role>
        <Business>
          <a
            className="link__std"
            href="https://www.qcode.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Qcode
          </a>
        </Business>
        <Role>Junior Developer</Role>
        <Business>
          <a
            className="link__std"
            href="https://velocity.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Velocity Design
          </a>
        </Business>
        <Role>Junior Designer</Role>
      </div>
    </BodyContainer>
  </>
);

export default aboutPage;

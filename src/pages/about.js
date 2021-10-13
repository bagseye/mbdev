import React from "react";
import SEO from "../components/SEO";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import Layout from "../components/Layout";

const aboutPage = () => (
  <>
    <SEO title="About the developer" />
    <Layout>
      <GeneralContentStyles>
        <div
          style={{ paddingTop: "150px" }}
          className="container container-grid"
        >
          <div className="col">
            <h1>About the developer</h1>
            <p>
              I'm a frontend web developer with 5+years of agency-based
              employment working in Inverness for projects across Scotland.
              Working in a professional capacity with WordPress/PHP, developing
              bespoke websites that focus on design and fast speeds. On personal
              projects using the Javascript library React through the GatsbyJS
              framework.
            </p>
            <p>
              Professional projects that I have worked on include major timber
              suppliers and luxury accommodation providers across Scotland. At
              home, I have developed and maintain several themes that are listed
              on the Gatsby Starter Library under an open-source licence.
            </p>
          </div>
        </div>
      </GeneralContentStyles>
    </Layout>
  </>
);

export default aboutPage;

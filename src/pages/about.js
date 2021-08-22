import React from "react";
import SEO from "../components/SEO";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import CallToAction from "../components/CallToAction/CallToAction";
import Layout from "../components/Layout";

const aboutPage = () => (
  <>
    <SEO title="About the developer" />
    <Layout>
      <div className="container__body">
        <GeneralContentStyles>
          <div className="container">
            <div className="col">
              <h2>About the developer</h2>
            </div>

            <div className="col">
              <p>
                I'm a frontend web developer with 5+years of agency-based
                employment working in Inverness for projects across Scotland.
                Working in a professional capacity with WordPress/PHP,
                developing bespoke websites that focus on design and fast
                speeds. On personal projects using the Javascript library React
                through the GatsbyJS framework.
              </p>
              <p>
                Professional projects that I have worked on include major timber
                suppliers and luxury accommodation providers across Scotland. At
                home, I have developed and maintain several themes that are
                listed on the Gatsby Starter Library under an open-source
                licence.
              </p>
            </div>
          </div>
        </GeneralContentStyles>
        <CallToAction
          message="Looking to start a project?"
          subMessage="Get in touch and request a quote for your next project"
        />
      </div>
    </Layout>
  </>
);

export default aboutPage;

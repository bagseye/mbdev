import React from "react";
import SEO from "../components/SEO";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import Layout from "../components/Layout";

const privacyPage = () => (
  <>
    <SEO title="Privacy & Your Data" />
    <Layout>
      <div className="container__body">
        <GeneralContentStyles>
          <div className="container">
            <div className="col">
              <h2>Privacy & your data</h2>
            </div>
            <div className="col">
              <p>
                This website uses Google Analytics to monitor site traffic and
                help improve user experiences.
              </p>
              <p>
                When contacting the website your details will only be used for a
                method of comunicating and will not be used for marketing or
                passed on to third parties.
              </p>
            </div>
          </div>
        </GeneralContentStyles>
      </div>
    </Layout>
  </>
);

export default privacyPage;

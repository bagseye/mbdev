import React from "react";
import SEO from "../components/SEO";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import Layout from "../components/Layout";

const credits = () => (
  <>
    <SEO title="Website Credits" />
    <Layout>
      <GeneralContentStyles>
        <div
          style={{ paddingTop: "150px" }}
          className="container container-grid"
        >
          <div className="col">
            <h1>Website credits</h1>
            <p>
              This site uses a number of stock images that may require
              attribution. If one of your images has been used and I have not
              added the correct attribution, please contact me so I can resolve
              the issue.
            </p>
            <ul>
              <li>
                <a
                  href="https://unsplash.com/@currentspaces"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  Brandon Romanchuk
                </a>
              </li>
              <li>
                <a
                  href="https://unsplash.com/@druks"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  Félix Besombes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </GeneralContentStyles>
    </Layout>
  </>
);

export default credits;

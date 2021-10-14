import React from "react";
import SEO from "../components/SEO";
import { Link } from "gatsby";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import Layout from "../components/Layout";

const error = () => (
  <>
    <SEO title="Error" />
    <Layout>
      <div className="container__body">
        <GeneralContentStyles>
          <div className="container container-grid">
            <div className="col">
              <h1>Page not found</h1>
              <p>This page has moved or no longer exists.</p>
              <p>
                Please choose another option from the menu above, or to return
                home, press the button below.
              </p>
              <Link className="link__std" to="/">
                Return Home
              </Link>
            </div>
          </div>
        </GeneralContentStyles>
      </div>
    </Layout>
  </>
);

export default error;

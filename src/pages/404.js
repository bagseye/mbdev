import React from "react";
import SEO from "../components/SEO";
import { Link } from "gatsby";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";

const error = () => (
  <>
    <SEO title="Error" />
    <>
      <div className="container__body">
        <GeneralContentStyles>
          <div className="container">
            <div className="col">
              <h2>Page not found</h2>
            </div>
            <div className="col">
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
    </>
  </>
);

export default error;

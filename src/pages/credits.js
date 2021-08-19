import React from "react";
import SEO from "../components/SEO";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";

const credits = () => (
  <>
    <SEO title="Website Credits" />
    <>
      <div className="container__body">
        <GeneralContentStyles>
          <div className="container">
            <div className="col">
              <h2>Website credits</h2>
            </div>
            <div className="col">
              <p>
                This site uses a number of stock images that may require
                attribution. If one of your images has been used and I have not
                added the correct attribution, please contact me so I can
                resolve the issue.
              </p>
            </div>
          </div>
        </GeneralContentStyles>
      </div>
    </>
  </>
);

export default credits;

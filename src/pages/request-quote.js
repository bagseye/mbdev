import React from "react";
import SEO from "../components/SEO";
import QuoteForm from "../components/Quote/Quote";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";

const Contact = () => (
  <>
    <SEO title="Request a quote" />
    <>
      <div className="container__body">
        <GeneralContentStyles>
          <div className="container">
            <div className="col">
              <h2>Request a quote</h2>
            </div>
            <div className="col">
              <QuoteForm />
            </div>
          </div>
        </GeneralContentStyles>
      </div>
    </>
  </>
);

export default Contact;

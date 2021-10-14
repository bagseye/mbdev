import React from "react";
import SEO from "../components/SEO";
import QuoteForm from "../components/Quote/Quote";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import Layout from "../components/Layout";

const Contact = () => (
  <>
    <SEO title="Request a quote" />
    <Layout>
      <GeneralContentStyles>
        <div
          style={{ paddingTop: "150px" }}
          className="container container-grid"
        >
          <div className="col">
            <h1>
              Request a quote by completing the fields below. All fields are
              required
            </h1>
            <QuoteForm />
          </div>
        </div>
      </GeneralContentStyles>
    </Layout>
  </>
);

export default Contact;

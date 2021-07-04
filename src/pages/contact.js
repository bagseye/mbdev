import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ContactForm from "../components/Contact/Contact";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";

const Contact = () => (
  <>
    <SEO title="Contact the developer" />
    <Layout>
      <div className="container__body">
        <GeneralContentStyles>
          <div className="container">
            <div className="col">
              <h2>Contact the developer</h2>
            </div>
            <div className="col">
              <ContactForm />
            </div>
          </div>
        </GeneralContentStyles>
      </div>
    </Layout>
  </>
);

export default Contact;

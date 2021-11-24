import React from "react";
import SEO from "../components/SEO";
import ContactForm from "../components/Contact/Contact";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import Layout from "../components/Layout";

const Contact = () => (
  <>
    <SEO title="Contact the developer" />
    <Layout>
      <GeneralContentStyles>
        <div
          style={{ paddingTop: "150px" }}
          className="container container-grid"
        >
          <div className="col">
            <h1>
              Get in touch by completing the fields below, or call{" "}
              <a style={{ fontWeight: 700 }} href="tel:00447369256509">
                07369 256 509
              </a>
              . All fields are required
            </h1>
            <ContactForm />
          </div>
        </div>
      </GeneralContentStyles>
    </Layout>
  </>
);

export default Contact;

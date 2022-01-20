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
        <section className="sectiongap topgap">
          <div className="container">
            <div className="content__area">
              <h1>Request a quote by completing the fields below</h1>
              <h2>
                Or, call{" "}
                <a style={{ fontWeight: 700 }} href="tel:00447369256509">
                  07369 256 509
                </a>
                . All fields are required
              </h2>
              <QuoteForm />
            </div>
          </div>
        </section>
      </GeneralContentStyles>
    </Layout>
  </>
);

export default Contact;

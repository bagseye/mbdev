import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import TechList from "../components/Tech/TechList";
import Button from "../components/Button/Button";
import ServicesContainer from "../components/Services/ServicesContainer";
import Service from "../components/Services/Service";
import { StaticImage } from "gatsby-plugin-image";

const aboutPage = () => (
  <>
    <SEO title="About the developer" />
    <Layout>
      <section className="sectiongap topgap">
        <div className="container">
          <div className="content__area">
            <h1>
              I'm a frontend web developer with 5+years of agency-based
              employment working in Inverness for projects across Scotland.
            </h1>
            <p className="leadin">
              Working in a professional capacity with WordPress/PHP, developing
              bespoke websites that focus on design and fast speeds. On personal
              projects using the Javascript library React through the GatsbyJS
              framework.
            </p>
            <p>
              Professional projects that I have worked on include major timber
              suppliers and luxury accommodation providers across Scotland. At
              home, I have developed and maintain several themes that are listed
              on the Gatsby Starter Library under an open-source licence.
            </p>
          </div>
          <TechList />
          <div className="content__area">
            <h2 className="as__h1">
              Are you an employer looking to know more about projects I have
              worked on?
            </h2>
            <p className="leadin">
              Examples of work I have completed while employed at design
              agencies can be found on the employer's dashboard. Register for a
              free account to gain access to a more detailed overview of my
              skills.
            </p>
            <Button to="/dashboard" text="Go to Dashboard" />
          </div>
        </div>
      </section>
      <div className="container sectiongap">
          <div className="content__area">
            <h2 className="as__h1">Looking for web design or branding serivces in Inverness?</h2>

            <p className="leadin">
              Choose from the options below, if you are looking for expert web development, or finely crafted branding services.
            </p>
          </div>
        </div>
        <ServicesContainer>
          <Service
            route="/services"
            to="/services/web-design"
            name="Inverness Web Design"
            excerpt="SEO-friendly websites that are perfect for accelerating your business growth."
          >
            <StaticImage src="../../static/gatsby-services-banner.jpg"/>
          </Service>
          <Service
            route="/services"
            to="/services/brand-consultancy"
            name="Branding & Logo Design in Inverness"
            excerpt="Complement your products and services with a brand or logo design design package."
          >
            <StaticImage src="../../static/business-meeting.jpg"/>
          </Service>
        </ServicesContainer>
    </Layout>
  </>
);

export default aboutPage;

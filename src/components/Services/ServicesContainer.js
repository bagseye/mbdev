import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { CardContainerGlobalStyles as ServicesContainerGlobalStyles } from "../Cards/CardsGlobalStyles";
import Service from "./Service";

const ServicesContainer = () => {
  return (
    <ServicesContainerGlobalStyles 
      className="container sectiongap" 
      itemScope 
      itemType="https://schema.org/Service"
    >
      <meta itemProp="serviceType" content="Web Design & Development" />
      <ul 
        itemProp="hasOfferCatalog" 
        iitemScope 
        itemType="https://schema.org/OfferCatalog"
      >
        <Service
          route="/services"
          to="/services/web-design"
          name="Inverness Web Design"
          excerpt="SEO-friendly websites that are perfect for accelerating your business growth."
        >
          <StaticImage 
            loading="lazy"
            placeholder="blurred"
            alt="Macbook slightly open on a dark background"
            src="../../static/gatsby-services-banner.jpg"/>
        </Service>
        <Service
          route="/services"
          to="/services/brand-consultancy"
          name="Branding & Logo Design in Inverness"
          excerpt="Complement your products and services with a brand or logo design design package."
        >
          <StaticImage 
            loading="lazy"
            placeholder="blurred"
            alt="Team meeting being held around a table"
            src="../../static/business-meeting.jpg"/>
        </Service>
      </ul>
    </ServicesContainerGlobalStyles>
  );
};

export default ServicesContainer;
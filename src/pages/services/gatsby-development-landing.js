import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/SEO";
import BannerSimple from "../../components/Banner/BannerSimple";
import Perks from "../../components/Perks/Perks";
import Perk from "../../components/Perks/Perk";
import { BsSpeedometer2 as Speed } from "react-icons/bs";
import {
  AiOutlineLock as Security,
  AiOutlineShopping as Ecom,
} from "react-icons/ai";
import { IoIosInfinite as Dynamic } from "react-icons/io";
import Slide from "../../components/Slide/Slide";
import ContactForm from "../../components/Contact/Contact";
import Button from "../../components/Button/Button";

const GatsbyDevelopment = () => {
  return (
    <>
      <Seo
        title="Gatsby Development Services"
        description="Super-fast sites using GatsbyJS and pre-rendered content"
      />
      <Layout>
        <BannerSimple
          title="Gatsby Development Services"
          subTitle="Harnessing the power of the JAMStack to deliver lightning-fast websites. Optimised for Google Page Speed with improved accessibility standards."
        >
          <StaticImage
            className="banner__bg"
            src="../../../static/gatsby-services-banner.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="Gatsby Development Services Banner Image"
          />
        </BannerSimple>
        <Perks
          title="How can Gatsby and the Jamstack help your business?"
          cta="Get in touch today to find out how switching to the Jamstack can benefit your future growth."
        >
          <Perk
            icon={<Speed />}
            title="Faster Content Delivery"
            content="Your site is pre-rendered and ready to serve via a CDN. Say goodbye to loading times"
          />
          <Perk
            icon={<Security />}
            title="Improved Security"
            content="Because the site is pre-rendered, there is no direct access to it's backend services. Reducing the attack vectors available to hackers"
          />
          <Perk
            icon={<Dynamic />}
            title="Dynamic Content"
            content="Just because the site is static it doesn't mean you can't change the content. All Jamstack sites can be connected to a CMS for the ultimate control of content"
          />
          <Perk
            icon={<Ecom />}
            title="Ecommerce Available"
            content="Hook your site up to your favourite shopping backend to extend its capabilities. With options such as Shopify available"
          />
        </Perks>
        <Slide
          title="Become the RoadRunner. Leave the Coyotes behind."
          content="Delivering fast experiences are key to retaining your current users, as well as attracting new customers. Attention spans on the web are short, we expect actions to be completed fast and loading time to be as short as possible. Gatsby sites offer superb app-like experiences to users with seamless transitions between pages and ultra-fast loading times. By switching to the Jamstack you’ll benefit from reduced user issues such as servers not responding to requests and slooooooow page loads."
        >
          <StaticImage
            className="slide__bg"
            src="../../../static/gatsby-services-banner.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="Gatsby Development Services Banner Image"
          />
        </Slide>
        <section className="section sectiongap">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="as__h1">
                  Its time to go headless...
                  <br />
                  By de-coupling your CMS.
                </h2>
              </div>
              <div className="column">
                <p>
                  A Gatsby-powered site uses a headless CMS, meaning your site
                  and your content is decoupled. This means that in the unlikely
                  event where your CMS is accessed, the front-end will be
                  unaffected because it uses a completely different
                  architecture.
                </p>
                <p>
                  Gatsby sites offer superb app-like experiences to users with
                  seamless transitions between pages and ultra-fast loading
                  times. By switching to the Jamstack you’ll benefit from
                  reduced user issues such as servers not responding to requests
                  and slooooooow page loads.
                </p>
                <Button to="/contact" />
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="section sectiongap">
          <div className="container">
            <div className="content__area">
              <h2 className="as__h1">
                Get in touch today to discuss your next project, or find out
                more about the Jamstack and Gatsby.
              </h2>
              <p className="leadin">
                Just enter a few of your details and what you are looking for in
                terms of web development.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default GatsbyDevelopment;

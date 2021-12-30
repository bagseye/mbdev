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
import {
  MdOutlineAutoFixHigh as Maintain,
  MdOutlineMobileFriendly as Mobile,
} from "react-icons/md";
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
          subTitle="Transform your business website by using Gatsby, the super-fast Jamstack powered static-site generator. A website built for performance and security."
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
          title="How can a Gatsby-powered website and the Jamstack transform your business?"
          cta="Get in touch today to find out how switching to the Jamstack can benefit your future growth."
          ctaSub="With packages to suit all business needs, you can trust Morgan Baker Development with your next project. You'll be working with a developer experienced in delivering fast, SEO-friendly websites using Gatsby and the Jamstack."
        >
          <Perk
            icon={<Speed />}
            title="Super-fast content delivery"
            content="All pages are pre-rendered and served to your users via a CDN.This ensures great Page Speed performance, fast loading times and instant page transitions and delivering an app-like feel to your customers."
          />
          <Perk
            icon={<Security />}
            title="Increased security"
            content="Jamstack sites rely on fewer servers, meaning there is less opportunity for hackers to do damage. Your site's frontend is decoupled from your backend services meaning there is no direct route to your data."
          />
          <Perk
            icon={<Dynamic />}
            title="Dynamic content"
            content="A static site doesn't mean the content can't change. All Jamstack sites can be connected to a headless CMS for the ultimate control of content, with a huge selection available such as Contentful, Sanity, and even WordPress."
          />
          <Perk
            icon={<Ecom />}
            title="Shop...but don't drop"
            content="As well as a headless CMS, you can connect your Gatsby-powered site to your preferred store. Creating a fast-converting, full ecommerce business through major platforms such as Shopify."
          />
          <Perk
            icon={<Maintain />}
            title="Easier to maintain"
            content="With traditional server-based sites you are reliant on your hosting company. If they go down, so does your site. With the Jamstack your site has already been built and is stored on CDNs around the globe, meaning you can pretty much say goodbye to downtime."
          />
          <Perk
            icon={<Mobile />}
            title="Excellent mobile performance"
            content="Being fast on mobile is vital, particularly with Google and it's method of ranking based on mobile performance. Gatsby sites achieve excellent  Page Speed scores, giving you a clear advantage over your competitors."
          />
        </Perks>
        <Slide
          title="Become the RoadRunner. Leave the Coyotes behind."
          subTitle="The modern web is all about speed. Delivering your content faster than your competitors and increasing the chance of converting your customers."
          content="Attention spans on the web are short, and it is vital your website delivers on performance. Gatsby sites benefit from industry leading performance because of their pre-rendered nature. This means your customers can experience app-like transitions when moving through your pages. Reduce user frustration and focus on delivering the best user experience possible by switching to a Gatsby-powered site."
        >
          <StaticImage
            className="slide__bg"
            src="../../../static/gatsby-services-speed.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="Gatsby Development Services"
          />
        </Slide>
        <section className="section sectiongap">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="as__h1">
                  It's time to go headless...
                  <br />
                  By decoupling your CMS.
                </h2>
              </div>
              <div className="column">
                <p>
                  Gatsby-powered sites use a headless CMS to deliver and edit
                  your content. This means your site is decoupled from it's
                  data, so there is no direct access to your information through
                  the website. All content and data is stored on a different
                  system, drastically reducing the chances of being hacked
                  through traditional means, such as brute-force.
                </p>
                <p>
                  You have a huge number of options for a headless CMS, such as
                  Contentful or Sanity to name just a couple. WordPress is even
                  available as a headless CMS giving you and your team the
                  opportunity to use a CMS you are all familiar with.
                </p>
                <Button to="/contact" />
              </div>
            </div>
          </div>
        </section>
        <section className="section sectiongap">
          <div className="container">
            <div className="content__area">
              <h2 className="as__h1">
                Get in touch today to discuss your next project, or find out
                more about the Jamstack and Gatsby.
              </h2>
              <p className="leadin">
                Just enter a few of your details and what you are looking for in
                your next web development project.
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

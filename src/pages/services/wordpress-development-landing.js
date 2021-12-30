import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/SEO";
import BannerSimple from "../../components/Banner/BannerSimple";
import Perks from "../../components/Perks/Perks";
import Perk from "../../components/Perks/Perk";
import { SiZeromq as Zero } from "react-icons/si";
import { RiTeamLine as Community } from "react-icons/ri";
import { BsSpeedometer2 as Speed } from "react-icons/bs";
import { CgMenuBoxed as Flexible } from "react-icons/cg";
import { AiOutlineLock as Security } from "react-icons/ai";
import { IoIosInfinite as Dynamic } from "react-icons/io";
import Slide from "../../components/Slide/Slide";
import ContactForm from "../../components/Contact/Contact";
import Button from "../../components/Button/Button";

const GatsbyDevelopment = () => {
  return (
    <>
      <Seo
        title="Bespoke WordPress Development"
        description="Bespoke web design & development using the world's favourite CMS"
      />
      <Layout>
        <BannerSimple
          title="Bespoke WordPress Development"
          subTitle="Web design and development using the world's most popular content management system. The ideal partner for content-rich websites."
        >
          <StaticImage
            className="banner__bg"
            src="../../../static/gatsby-services-banner.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="WordPress Development Services Banner Image"
          />
        </BannerSimple>
        <Perks
          title="What are the benefits of using WordPress for your next business website?"
          cta="Get in touch today to find out how switching to the Jamstack can benefit your future growth."
          ctaSub="With packages to suit all business needs, you can trust Morgan Baker Development with your next project. You'll be working with a developer experienced in delivering fast, SEO-friendly websites using Gatsby and the Jamstack."
        >
          <Perk
            icon={<Zero />}
            title="Zero fees"
            content="Some CMS require a yearly subscription, WordPress has no fees. It's an open source project which is maintained by countless developers. This reduces your yearly costs to simply maintain your website."
          />
          <Perk
            icon={<Community />}
            title="Huge Community"
            content="WordPress claims to power over half of the web and it has a massive developer community on-hand to push regular updates that improve not only the user experience, but essential security fixes as the web evolves."
          />
          <Perk
            icon={<Dynamic />}
            title="Plugin Architecture"
            content="WordPress is known for its extensive plugin library. A vast collection or custom functionality that can be added to a website when it is needed. Helping your website grow with your business."
          />
          <Perk
            icon={<Security />}
            title="Safe & Secure"
            content="With numerous 2FA options available and security hardening in place your WordPress website will be able to sustain malicious attacks on the web."
          />
          <Perk
            icon={<Flexible />}
            title="Flexible Content Editing"
            content="With the switch to the Block Editor API, WordPress now gives you the power to make any type of page you wish. And it's as easy as moving blocks of content around, making editing and adding new content a simple process."
          />
          <Perk
            icon={<Speed />}
            title="Great SEO performance"
            content="Because all WordPress websites are custom developments it means Page Speed is at the heart of their build. All bespoke websites achieve great mobile and desktop performance for your users."
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

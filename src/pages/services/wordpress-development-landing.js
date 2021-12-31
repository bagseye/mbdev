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
            src="../../../static/wordpress-development-banner.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="WordPress Development Services Banner Image"
          />
        </BannerSimple>
        <Perks
          title="What are the benefits of using WordPress for your next business website?"
          cta="A WordPress powered website gives you all the tools you'll need for future growth."
          ctaSub="Get in touch with Morgan Baker Development today and benefit from bespoke web design using WordPress. By making that choice, you're working with a developer with years of experience in developing fast, scalable websites using the popular CMS."
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
          title="The power to build exactly what you want."
          subTitle="WordPress has changed so much over the years. What started out as a simple blogging platform is now one of the most flexible CMS available."
          content="With the Block Editor you now have the power to edit every part of your content. And because each content area is a block, that means they are interchangeable with each other. Don't like the position of your current call to action? Then change it. Just a simple click and drag operation makes your content extremely flexible."
        >
          <StaticImage
            className="slide__bg"
            src="../../../static/wordpress-power-banner.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="WordPress Development Services"
          />
        </Slide>
        <section className="section sectiongap">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="as__h1">
                  All the tools your business needs to succeed.
                </h2>
              </div>
              <div className="column">
                <p>
                  Your business may just be starting out, or it may be
                  established and looking to move into new areas of success.
                  Whatever your goals, WordPress can handle everything that is
                  thrown at it.
                </p>
                <p>
                  You'll have all the tools you need in place, so if you are
                  starting to grow your business the CMS and website can match
                  your ambitions. It's extensive plugin library means there are
                  countless options available to you, such as ecommerce
                  platforms, as you pursue success.
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
                Take the next step by getting in touch today to find out more
                about the power of WordPress.
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

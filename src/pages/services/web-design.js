import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/SEO";
import Banner from "../../components/Banner/Banner";
import Perks from "../../components/Perks/Perks";
import Perk from "../../components/Perks/Perk";
import Prices from "../../components/Prices/Prices";
import Price from "../../components/Prices/Price";
import { SiZeromq as Zero } from "react-icons/si";
import { RiTeamLine as Community } from "react-icons/ri";
import { BsSpeedometer2 as Speed } from "react-icons/bs";
import { CgMenuBoxed as Flexible } from "react-icons/cg";
import { AiOutlineLock as Security } from "react-icons/ai";
import { IoIosInfinite as Dynamic } from "react-icons/io";
import Slide from "../../components/Slide/Slide";
import ContactForm from "../../components/Contact/Contact";
import Button from "../../components/Button/Button";

const WebDesign = () => {
  return (
    <>
      <Seo
        title="Inverness web design & e-commerce services. Delivering expert results in user experience."
        description="Experience web design and development using the world's most popular content management system, WordPress. The ideal partner for your business."
      />
      <Layout>
        <Banner
          title="Inverness web design & e-commerce services. Delivering expert results in user experience."
          subTitle="Experience web design and development using the world's most popular content management system, WordPress. The ideal partner for your business."
          ctaOneText="Find out more"
          ctaOneAnchor="#pageTop"
        >
          <StaticImage
            className="banner__bg"
            src="../../../static/business-owner-joy.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="WordPress Development Services Banner Image"
          />
        </Banner>
        <div id="pageTop"></div>
        <section className="sectiongap">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="as__h1">
                Delivering a pleasurable experience for your customers. Benefit from years of top-level agency experience in Inverness.
                </h2>
              </div>
              <div className="column">
                <p>
                With extensive experience in designing and developing custom websites using WordPress, every website is carefully planned, structured, and designed with user experience in mind.</p>
                <p>
                From initial concept to prototype, onto the finished product, each website build represents your brand perfectly. Showcase your brand in Inverness with a website that highlights the great products and experiences your business delivers.
                </p>
                <p>Using design principles that are tried and tested. Never over-designed or complicated.</p>
                <Button anchor="#contactForm" />
              </div>
            </div>
          </div>
        </section>
        <Slide
          title="Web design, development, & e-commerce packages to suit businesses of all sizes in Inverness, the Highlands, and beyond."
          subTitle="No business is the same, so the build of your company website is equally unique. With extensive agency experience delivering web design in Inverness, your business is in safe hands."
          content="If you're a small business in Inverness looking to make your first steps, or expanding your brand in a crowded marketplace, there are web design packages to suit your requirements. Each website is built with user experience and speed at its heart."
          contentTwo="A website built with great design principles should be an option for all businesses, of all sizes and budgets. Request a quote today to see how using web design in Inverness get benefit your business."
          form={true}
        >
          <StaticImage
            className="slide__bg"
            src="../../../static/business-meeting.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="WordPress Development Services"
          />
        </Slide>
        <section className="sectiongap">
          <div className="container">
            <div className="content__area">
              <h2 className="as__h1">
              Websites with an extensive, custom toolkit that gives you everything your business needs to grow. Develop marketing campaigns in minutes.
              </h2>
              <p className="leadin">
              Every custom-built website includes an easy-to-use toolkit developed using WordPress. Your bespoke toolkit gives you and your team the freedom to create engaging pages and marketing campaigns. Great for targeting your audience in Inverness.
              </p>
              <p>All custom blocks are styled to match your brand perfectly, which means your message stays consistent throughout. Speak directly to your customers in Inverness and deliver your message efficiently, and with confidence.</p>
            </div>
          </div>
        </section>
        <Slide
          title="Bespoke websites expertly built using the world’s most popular and adaptable content management system, WordPress."
          subTitle="WordPress is known the world over as the best CMS to use for business applications and websites. Offering you a huge range of customisation that gives you the ability to create engaging, vibrant content that connects with your users."
          content="If you’re looking for web design in Inverness that gives you not only great design, but an amazing CMS too, get in touch today."
          form={true}
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
        <Perks
          title="What are the benefits of using WordPress for your next business website? Here is why your next website should use WordPress."
          cta="Would you like to know more? If you’re looking for web design in Inverness then all you need to do is fill out the form below for a free consultation."
          anchor="#contactForm"
        >
          <Perk
            icon={<Zero />}
            title="No monthly fees"
            content="Some CMS require monthly or yearly subscriptions. WordPress has no fees. It's an open source project which is maintained by countless talented developers. Reducing your yearly costs to maintain your business’ website."
          />
          <Perk
            icon={<Security />}
            title="Safe & secure"
            content="With numerous Two-factor-authentication options available, regular updates, and security hardening in place, your WordPress website will be able to sustain malicious attacks from the web."
          />
          <Perk
            icon={<Dynamic />}
            title="Plugin architecture"
            content="WordPress is known for its extensive plugin library. A vast collection of custom functionality that can be added to a website when it is needed. Helping you grow your website in parallel with your business."
          />
          <Perk
            icon={<Speed />}
            title="Great SEO performance"
            content="All WordPress websites are custom developments, meaning Page Speed is at the heart of their build. All bespoke websites achieve great mobile and desktop performance for your users, giving your site a better chance of performing against other Inverness websites."
          />
          <Perk
            icon={<Flexible />}
            title="Flexible content editing"
            content="Using a simple-intuitive block editor, WordPress gives you the power to make any type of page you wish. And it's as easy as moving blocks of content around, making editing and adding new content on your website a simple process."
          />
          <Perk
            icon={<Community />}
            title="Great community"
            content="With a claim to power over half of the internet, WordPress has a massive developer community on-hand to issue regular updates that improve not only the user experience, but add essential security fixes as the web evolves."
          />
        </Perks>
        <Prices>
          <Price title="Branded websites" cost="695" content="A beautifully crafted website that complements your business and creates brand-awareness within your customer base."/>
          <Price title="E-commerce websites" cost="1250" content="Do you have products to sell direct to customers? An e-commerce website with secure hosting and payments is the ideal partner."/>
        </Prices>
        <section className="sectiongap">
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

export default WebDesign;

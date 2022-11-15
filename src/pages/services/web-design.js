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
        title="Inverness Web Design & E-commerce services. Delivering expert results."
        description="Bespoke web design & development using the world's favourite CMS"
      />
      <Layout>
        <Banner
          title="Inverness Web Design & E-commerce services. Delivering expert results."
          subTitle="Web design and development using the world's most popular content management system. The ideal partner for content-rich websites."
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
        <Perks
          title="What are the benefits of using WordPress for your next business website?"
          cta="User-focused development, creating bespoke environments for your business. Helping create digital growth in Inverness & the Highlands."
          ctaSub="With extensive experience in designing and developing custom websites built using WordPress. Each site is carefully planned, structured, and designed with the user experience in mind."
          ctaSubTwo="From initial concept to prototype, and then onto the finished product, each build represents your brand perfectly. Using design principles that are tried and tested, never over-designed or complicated."
          anchor="#contactForm"
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
          title="An extensive, custom toolkit that gives you everything your business needs to grow. Develop marketing campaigns in minutes."
          subTitle="Every custom-built website includes an easy-to-use toolkit developed using WordPress. Your bespoke toolkit gives you and your team the freedom to create engaging pages and marketing campaigns."
          content="All custom blocks are styled to match your brand perfectly, which means your message stays consistent throughout. Speak directly to your customers in Inverness and deliver your message efficiently, and with confidence."
          anchor="#contactForm"
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
            <div className="columns">
              <div className="column">
                <h2 className="as__h1">
                Web design, development, & e-commerce packages to suit businesses of all sizes in Inverness, the Highlands, and beyond.
                </h2>
              </div>
              <div className="column">
                <p>
                No business is the same and therefore the build of your company website is equally unique. If it's a restaurant in Inverness or a football club in Dingwall, each web development or e-commerce package is made to your exact specifications.
                </p>
                <p>
                If you're a small business in Inverness looking to make your first steps, or building your brand in a crowded marketplace, there are development packages to suit.
                </p>
                <p>Each site is built with user experience and speed at its heart. A website built with great design principles should be an option for all businesses, of all sizes.</p>
                <Button anchor="#contactForm" />
              </div>
            </div>
          </div>
        </section>
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

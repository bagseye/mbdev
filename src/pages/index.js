import React from "react";
import SEO from "../components/SEO";
import Banner from "../components/Banner/Banner";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import FeatureDevs from "../components/FeatureDevelopments";
import FullWidthImage from "../components/FullWidthImage/FullWidthImage";
import CallToAction from "../components/CallToAction/CallToAction";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import ContactMethods from "../components/ContactMethods";

const Index = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <Banner />
      <FeatureDevs />
      <div className="container__body">
        <FullWidthImage />
        <GeneralContentStyles>
          <div className="container">
            <div className="col">
              <h2>A short introduction</h2>
            </div>
            <div className="col">
              <p>
                Great web design is about more than the look. It’s about
                creating experiences your customer finds easy to use.
              </p>
              <p>
                By not only focussing on the visuals, but also the path users
                are going to take during their visit you’ll have a website that
                not only looks great but is fit for purpose.
              </p>
              <p>
                All sites include a content management system, such as
                Wordpress, that gives you the tools needed to maintain and grow
                your website content. You might compose regular blog content, or
                have a rapidly-expanding business that needs steady content
                changes, a CMS will enable this.
              </p>
              <p>
                However, you may just be here for a look around, and that's cool
                too. Just take a look at the recent projects for any inspiration
                you might need.
              </p>
            </div>
          </div>
        </GeneralContentStyles>

        <CallToAction
          message="Wordpress web development services"
          subMessage="With extensive knowledge and experience in Wordpress you can find all the reasons why you should consider it for your next project here."
          link="services/wordpress-development"
          linkText="Wordpress services"
          orientation="left"
        >
          <StaticImage
            className="cta__img"
            objectFit="cover"
            src="../images/apple-products.jpg"
            alt="Apple Products"
            placeholder="blurred"
          />
        </CallToAction>
        <CallToAction
          message="GatbsyJs and Static-site developement"
          subMessage="Static sites offer some huge performance benefits. Your project may not require a content management system like Wordpress. Check out the reasons to use Gatsby for your next project here."
          link="services/gatsby-development"
          linkText="Gatsby Development"
          orientation="right"
        >
          <StaticImage
            className="cta__img"
            objectFit="cover"
            src="../images/macbook-keyboard.jpg"
            alt="Macbook Keyboard closeup"
            placeholder="blurred"
          />
        </CallToAction>
        <ContactMethods />
      </div>
    </Layout>
  </>
);

export default Index;

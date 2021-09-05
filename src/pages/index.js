import React from "react";
import SEO from "../components/SEO";
import Banner from "../components/Banner/Banner";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import FeatureDevs from "../components/FeatureDevelopments";
import FullWidthImage from "../components/FullWidthImage/FullWidthImage";
import CallToAction from "../components/CallToAction/CallToAction";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <div className="container__body">
        <Banner />
        <FullWidthImage />
        <GeneralContentStyles>
          <div className="container">
            <div className="col">
              <h2>A short introduction</h2>
            </div>
            <div className="col">
              <p>
                When I started in web development my initial thought was that
                great design came from animations and complex layouts. Over time
                my thoughts around this idea have changed. The approach to
                design the people such as Dieter Rams have, that design is for
                everyone, has become an idea that I have ultimately begun to
                follow.
              </p>
              <p>
                That is not to say that an accessible site lacks any form of
                design. That is far from the truth. Great design comes from a
                great user experience, not from flashy animations, and it is my
                responsibility as a web developer to create inclusive
                experiences.
              </p>
              <p>
                Access to knowledge is vital for everyone in society, the web
                and it's content should be freely available to all.
              </p>
            </div>
          </div>
        </GeneralContentStyles>
        <FeatureDevs />
        <CallToAction
          message="Wordpress web development services"
          subMessage="With extensive knowledge and experience in Wordpress you can find all the reasons why you should consider it for your next project here."
          link="/wordpress-development"
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
          link="/gatbsy-development"
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
        <CallToAction
          message="Are you an employer or a recruiter?"
          subMessage="If you are an employer or a recruiter there is a dashboard area where you can get all the information you require. Find it here..."
          link="/dashboard"
          linkText="Dashboard Login"
          orientation="center"
          noImage={true}
        />
        <CallToAction
          message="Looking to start a project?"
          subMessage="Get in touch and request a quote for your next project"
          orientation="left"
        >
          <StaticImage
            className="cta__img"
            objectFit="cover"
            src="../images/macbook-black-desk.jpg"
            alt="Macbook on a black desk"
            placeholder="blurred"
          />
        </CallToAction>
      </div>
    </Layout>
  </>
);

export default Index;

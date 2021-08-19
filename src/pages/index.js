import React from "react";
import SEO from "../components/SEO";
import Banner from "../components/Banner/Banner";
import { GeneralContentStyles } from "../components/GeneralContent/GeneralContentStyles";
import FeatureDevs from "../components/FeatureDevelopments";
import FullWidthImage from "../components/FullWidthImage/FullWidthImage";
import CallToAction from "../components/CallToAction/CallToAction";

const Index = () => (
  <>
    <SEO title="Home" />
    <>
      <div className="container__body">
        <Banner />
        <FullWidthImage />
        <GeneralContentStyles>
          <div className="container">
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
          message="Looking to start a project?"
          subMessage="Get in touch and request a quote for your next project"
        />
      </div>
    </>
  </>
);

export default Index;

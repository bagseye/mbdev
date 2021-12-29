import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/SEO";
import BannerSimple from "../../components/Banner/BannerSimple";

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
      </Layout>
    </>
  );
};

export default GatsbyDevelopment;

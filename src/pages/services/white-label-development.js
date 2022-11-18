import React from "react";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/SEO";
import Banner from "../../components/Banner/Banner";
import Perks from "../../components/Perks/Perks";
import Perk from "../../components/Perks/Perk";
import Prices from "../../components/Prices/Prices";
import Price from "../../components/Prices/Price";
import { RiTeamLine as Community } from "react-icons/ri";
import { BsSpeedometer2 as Speed, BsLifePreserver as Ring } from "react-icons/bs";
import { FaCode as Code, FaPencilAlt as Pencil, FaHandshake as Handshake } from "react-icons/fa";
import {BiTimer as Timer, BiSearchAlt as Magnify} from "react-icons/bi";
import {GiUnplugged as Plugin} from "react-icons/gi";
import ContactForm from "../../components/Contact/Contact";
import Button from "../../components/Button/Button";

const WhiteLabelDevelopment = () => {
  return (
    <>
      <Seo
        title="White Label Web Design in Inverness. Delivering expert results."
        description="Supporting web design agencies in Inverness and beyond. Working to strict NDA standards"
      />
      <Layout>
        <Banner
          title="White label web design in Inverness. Agency standard development using WordPress."
          subTitle="Supporting web design agencies in Inverness and beyond. Working to strict NDA standards."
        >
          <StaticImage
            className="banner__bg"
            src="../../../static/gatsby-services-banner.jpg"
            placeholder="blurred"
            transformOptions={{ fit: "cover" }}
            formats={["auto", "webp"]}
            alt="WordPress Development Services Banner Image"
          />
        </Banner>
        <Perks
          title="What are the benefits of using a white label web developer?"
          cta="Sounds good? Would you like to start using a white label web designer? From Inverness, any web development project can be catered for."
          ctaSub="Working with WordPress has been my speciality since starting web development in Inverness. Get in touch today to find out how working with a white label developer can help your business."
          anchor="#contactForm"
        >
          <Perk
            icon={<Handshake />}
            title="Meet tight deadlines"
            content="Your current schedule may not give you time to meet an upcoming deadline. A white label developer can help you meet this."
          />
          <Perk
            icon={<Community />}
            title="Expand your team, dynamically"
            content="Things may be busy now, but can you justify a new employee? White label development is an expansion of your current team, without getting tied in."
          />
          <Perk
            icon={<Pencil />}
            title="Retain design & development credit"
            content="White label is exactly that. There will be no reference to external development, meaning you can inform the client the build is yours."
          />
          <Perk
            icon={<Code />}
            title="Expert codebase"
            content="Projects aren’t thrown together. They’re developed in a way that makes the code easily upgradable, with comments in all the right places."
          />
          <Perk
            icon={<Plugin />}
            title="Minimal plugin reliance"
            content="WordPress plugins are great. They can also be a nuisance. Minimal plugins are used, and all are agreed upon beforehand. Making updating and maintenance easy."
          />
          <Perk
            icon={<Speed />}
            title="Page Speed in Mind"
            content="Delivering a speedy website is vital for your clients. Each site performs great on page speed tests to ensure a better search ranking."
          />
        </Perks>
        <Perks title="How does white label WordPress development work?">
          <Perk 
            icon={<Pencil />} 
            title="1. You supply the designs" 
            content="In your preferred file format, you supply all of the templates you require and any mobile layouts that are required." 
          />
          <Perk 
            icon={<Timer />}
            title="2. Get a quote and timeframe" 
            content="Based on your designs, you’ll receive a bespoke quote and expected date to receive a development link."
          />
          <Perk 
            icon={<Magnify />}
            title="3. QA inspection" 
            content="Once the project development link is supplied, you’ll be able to inspect the work and supply amends. You get 3 rounds of amends, and all work is built to match the original designs." 
          />
          <Perk 
            icon={<Handshake />}
            title="4. Completion & Handover" 
            content="Once the inspection stage is completed the project is packaged up for you and sent. "
          />
          <Perk 
            icon={<Ring />}
            title="5. Further support" 
            content="If anything happens that may have been missed during the QA stage, these faults will be rectified at no extra cost."
          />
        </Perks>
        <section className="sectiongap">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h2 className="as__h1">
                Would you like to learn more? Maybe you want to use an Inverness web designer as your next white label development partner.
                </h2>
              </div>
              <div className="column">
                <p>
                I've been working in web design in Inverness for many years and over that time gained vast experience in WordPress. Delivering high specification websites to clients in Inverness and the surrounding areas.
                </p>
                <Button anchor="#contactForm" />
              </div>
            </div>
          </div>
        </section>
        <Prices>
          <Price title="HTML/CSS Only" cost="120" content="Not looking to include a content management system? If you're looking for just markup start here."/>
          <Price title="WordPress Development" cost="695" content="Frontend development with WordPress as a CMS, fully bespoke and built to your requirements."/>
        </Prices>
        <section className="sectiongap">
          <div className="container">
            <div className="content__area">
              <h2 className="as__h1">
                Take the next step by getting in touch today to find out more
                about the power of white label web development in Inverness and beyond.
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

export default WhiteLabelDevelopment;
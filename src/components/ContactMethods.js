import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const ContactMethodsStyles = styled.section`
  /* grid-column: 1 / 7;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0px;
  margin-bottom: var(--margins);
  content-visibility: auto;
  contain-intrinsic-size: 600px; */
  padding: calc(var(--gridGap) * 3) var(--gridGap);

  .container {
    width: 90%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background: linear-gradient(270deg, #7f00ff, #e100ff);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
    padding: calc(var(--gridGap) * 2) calc(var(--gridGap) * 1.5);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 10px 15px 4px rgba(0, 0, 0, 0.6);

    @-webkit-keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @-moz-keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @keyframes AnimationName {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background-color: #111;
      opacity: 1;
      z-index: 1;
      transition: opacity 0.3s ease;
      border-radius: 10px;
    }

    &:hover {
      &:before {
        opacity: 0;
      }

      h2,
      p {
        color: #fff;
      }

      .btn {
        border-color: #fff;
      }
    }

    h2,
    p,
    .btn {
      position: relative;
      z-index: 2;
      transition: color 0.3s ease;
    }

    h2 {
      font-size: 2.2rem;
      line-height: 1.2;
      margin-top: 0;
      color: #fff;
      margin-bottom: calc(var(--gridGap) / 2);
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);

      @media (min-width: 600px) {
        font-size: 2.7rem;
      }
    }

    p {
      font-size: 1.4rem;
      line-height: 1.2;
      margin-bottom: calc(var(--gridGap) * 1.5);
      color: #fff;
      text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    }
  }

  .title,
  .para,
  .contact-list {
    flex: 0 0 100%;
  }

  .para,
  .contact-list {
    @media (min-width: 768px) {
      flex-basis: 50%;
    }
  }

  .para {
    p {
      margin-top: 0;
      margin-bottom: calc(var(--gridGap) * 2);
    }

    @media (min-width: 768px) {
      padding-right: var(--gridGap);
      margin-bottom: 0;
    }
  }

  .contact-list {
    @media (min-width: 768px) {
      padding-left: var(--gridGap);
    }
  }

  .contact-list {
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 768px) {
      flex-direction: column;
    }

    > a {
      font-size: var(--h2);
      margin-right: var(--gridGap);
      line-height: 1.1;

      @media (min-width: 768px) {
        margin-right: auto;
        margin-bottom: var(--gridGap);

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const ContactMethods = () => (
  <ContactMethodsStyles>
    {/* <div className="title">
      <Heading content="Contact " highlight="Methods" />
    </div>
    <div className="para">
      <p>
        If you would like to discuss potential freelance web development
        projects using Wordpress or GatsbyJS please contact me through the
        following methods.
      </p>
    </div>
    <div className="contact-list">
      <a className="link__std" href="mailto:hello@morganbaker.dev">
        Email
      </a>
      <a
        className="link__std"
        href="https://github.com/bagseye"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div> */}
    <div className="container">
      <h2>Looking to start a project or more information?</h2>
      <p>
        Head over to the contact page where you can find methods to get in touch
        and move your project onto the next step.
      </p>
      <Link className="btn btn__white" to="/contact">
        Get in touch
      </Link>
    </div>
  </ContactMethodsStyles>
);

export default ContactMethods;

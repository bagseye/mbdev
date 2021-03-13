import React from "react";
import styled from "styled-components";
import Heading from "./Heading";

const ContactMethodsStyles = styled.section`
  grid-column: 1 / 7;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0px;
  margin-bottom: var(--margins);
  content-visibility: auto;
  contain-intrinsic-size: 600px;

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
    <div className="title">
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
    </div>
  </ContactMethodsStyles>
);

export default ContactMethods;

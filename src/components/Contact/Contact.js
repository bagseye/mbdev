import React from "react";
import styled from "styled-components";

const ContactFormStyles = styled.form`
  border-top: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  padding-top: 25px;
  grid-column: 1 / 7;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0 var(--gridGap);

  @media (min-width: 768px) {
    grid-column: 1 / 5;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Name = styled.label`
  font-family: var(--sansSerif);
  grid-column: 1 / 4;
  font-weight: 700;
  font-size: var(--paragraph);
  line-height: var(--paragraphLineHeight);

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
`;

const Field = styled.input`
  font-family: var(--sansSerif);
  height: 50px;
  border: none;
  border-bottom: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  background-color: transparent;
  grid-column: 4 / 7;
  margin-bottom: 50px;
  font-size: 16px;
  transition: border-bottom-color 0.5s ease;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px 20px;

  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1);
  }

  &::placeholder {
    font-weight: 300;
  }

  @media (min-width: 768px) {
    grid-column: 3 / 5;
  }
`;

const TextArea = styled.textarea`
  padding: 10px 20px;
  font-family: var(--sansSerif);
  min-height: 250px;
  border: none;
  border-bottom: var(--borderSmall) solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.05);
  grid-column: 4 / 7;
  margin-bottom: 50px;
  font-size: 16px;
  transition: border-bottom-color 0.5s ease;

  &:focus {
    border-bottom-color: rgba(255, 255, 255, 1);
  }

  &::placeholder {
    color: #000;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    grid-column: 3 / 5;
  }
`;

const ButtonArea = styled.div`
  grid-column: 4 / 7;

  button {
    height: 50px;
    padding: 0;
    background-color: transparent;
    text-decoration: underline #808080;
    font-size: var(--paragraph);
    line-height: var(--paragraphLineHeight);
    font-weight: 400;
    text-decoration: underline #808080;
    transition: text-decoration-color 0.5s ease;
    border: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline rgba(0, 0, 0, 0);
    }
  }

  @media (min-width: 768px) {
    grid-column: 3 / 5;
  }
`;

const ContactForm = () => {
  return (
    <div className="container-grid">
      <ContactFormStyles name="contact" netlify>
        <Name>Your name </Name>
        <Field type="text" name="name" placeholder="Enter your name" />
        <Name>Email contact </Name>
        <Field type="email" name="email" placeholder="Email address" />
        <Name>Your message </Name>
        <TextArea
          type="text"
          name="textarea"
          placeholder="Write your message here"
        />

        <ButtonArea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </ButtonArea>
      </ContactFormStyles>
    </div>
  );
};

export default ContactForm;

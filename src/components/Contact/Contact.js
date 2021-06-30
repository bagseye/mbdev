import React from "react";
import { ContactFormStyles } from "./ContactFormStyles";

const ContactForm = () => {
  return (
    <ContactFormStyles
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div style={{ visibility: "hidden", height: "0px" }}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </div>
      <div className="area">
        <label>Your name </label>
        <input type="text" name="name" placeholder="Enter your name" />
      </div>
      <div className="area">
        <label>Email contact </label>
        <input type="email" name="email" placeholder="Email address" />
      </div>
      <div className="area">
        <label>Phone number </label>
        <input type="number" name="phone" placeholder="Phone number" />
      </div>
      <div className="area">
        <label>Your message </label>
        <textarea
          type="text"
          name="contact-message"
          placeholder="Write your message here..."
        />
      </div>

      <button type="submit" className="btn">
        Get in touch
      </button>
    </ContactFormStyles>
  );
};

export default ContactForm;

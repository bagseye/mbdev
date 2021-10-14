import React from "react";
import { ContactFormStyles } from "../Contact/ContactFormStyles.js";

const Quote = () => {
  return (
    <ContactFormStyles>
      <form
        name="quote"
        method="post"
        action="/thanks/"
        data-netlify="true"
        netlify-honeypot="quote-bot-field"
      >
        <input type="hidden" name="form-name" value="quote" />
        <div style={{ visibility: "hidden", height: "0px" }}>
          <label>
            Don’t fill this out if you’re human:{" "}
            <input name="quote-bot-field" />
          </label>
        </div>
        <div className="area">
          <label>Your name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here..."
          />
        </div>
        <div className="area">
          <label>Your business name </label>
          <input
            type="text"
            name="business"
            placeholder="And then enter your business name..."
          />
        </div>
        <div className="area">
          <label>Website address (if applicable) </label>
          <input
            type="text"
            name="website"
            placeholder="Next, enter your web address..."
          />
        </div>
        <div className="area">
          <label>Email contact </label>
          <input
            type="email"
            name="email"
            placeholder="An email address to contact you on..."
          />
        </div>
        <div className="area">
          <label>Phone number </label>
          <input
            type="number"
            name="phone"
            placeholder="And a phone hone number to use..."
          />
        </div>
        <div className="area">
          <label>Any requirements needed for your new site? </label>
          <textarea
            type="text"
            name="requirements"
            placeholder="Use this field to give a brief description of what you are looking for. For example a website with branding..."
          />
        </div>

        <button type="submit" className="btn">
          Send this request
        </button>
      </form>
    </ContactFormStyles>
  );
};

export default Quote;

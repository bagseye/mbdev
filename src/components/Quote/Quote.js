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
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div className="area">
          <label>Your business name </label>
          <input
            type="text"
            name="business"
            placeholder="Enter your business name"
          />
        </div>
        <div className="area">
          <label>Website address (if applicable) </label>
          <input
            type="text"
            name="website"
            placeholder="Enter your web address"
          />
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
          <label>Any requirements needed for your new site? </label>
          <textarea
            type="text"
            name="requirements"
            placeholder="Write your requirements here"
          />
        </div>

        <button type="submit" className="btn">
          Request a quote
        </button>
      </form>
    </ContactFormStyles>
  );
};

export default Quote;

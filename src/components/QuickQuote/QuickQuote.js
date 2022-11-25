import React from "react";
import { QuickQuoteStyles } from "../QuickQuote/QuickQuoteStyles.js";
import Button from "../Button/Button";
import { BsTelephoneFill as Phone, BsEnvelopeFill as Email } from "react-icons/bs";


const QuickQuote = () => {
  return (
    <QuickQuoteStyles>
      <h2 className="as__h1">Request a quote.</h2>
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
          <label>
            Your name <span><sup>(Required)</sup></span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here..."
          />
        </div>
        <div className="area">
          <label>
            Email contact <span><sup>(Required)</sup></span>
          </label>
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
            placeholder="A phone number to use..."
          />
        </div>
        <Button as="button" type="submit" text="Send" />
      </form>
      <div className="form__contacts" itemscope itemtype="http://schema.org/LocalBusiness">
        <a className="form__contacts--link" href="tel:00447736592188">
          <span itemprop="telephone"><Phone />07736 592 188</span>
        </a>
        <a className="form__contacts--link" href="mailto:hello@morganbaker.dev">
          <span itemprop="email"><Email />hello@morganbaker.dev</span>
        </a>
      </div>
    </QuickQuoteStyles>
  );
};

export default QuickQuote;
import React from "react";
import { navigate } from "gatsby-link";
import { QuoteStyles } from "./QuoteStyles.js";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Quote = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };
  return (
    <QuoteStyles>
      <form
        name="quote"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="quote" />
        <div className="area">
          <label>Your name </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </div>
        <div className="area">
          <label>Your business name </label>
          <input
            type="text"
            name="business"
            placeholder="Enter your business name"
            onChange={handleChange}
          />
        </div>
        <div className="area">
          <label>Website address (if applicable) </label>
          <input
            type="text"
            name="website"
            placeholder="Enter your web address"
            onChange={handleChange}
          />
        </div>
        <div className="area">
          <label>Email contact </label>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
          />
        </div>
        <div className="area">
          <label>Phone number </label>
          <input
            type="number"
            name="phone"
            placeholder="Phone number"
            onChange={handleChange}
          />
        </div>
        <div className="area">
          <label>Any requirements needed for your new site? </label>
          <textarea
            type="text"
            name="requirements"
            placeholder="Write your requirements here"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn">
          Request a quote
        </button>
      </form>
    </QuoteStyles>
  );
};

export default Quote;

// const Quote = () => {
//   return (
//     <QuoteStyles>
//       <form name="quote" data-netlify="true" method="POST">
//         <input type="hidden" name="form-name" value="quote" />
//         <div className="area">
//           <label>Your name </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//           />
//         </div>
//         <div className="area">
//           <label>Your business name </label>
//           <input
//             type="text"
//             name="business"
//             placeholder="Enter your business name"
//           />
//         </div>
//         <div className="area">
//           <label>Website address (if applicable) </label>
//           <input
//             type="text"
//             name="website"
//             placeholder="Enter your web address"
//           />
//         </div>
//         <div className="area">
//           <label>Email contact </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email address"
//             required
//           />
//         </div>
//         <div className="area">
//           <label>Phone number </label>
//           <input type="number" name="phone" placeholder="Phone number" />
//         </div>
//         <div className="area">
//           <label>Any requirements needed for your new site? </label>
//           <textarea
//             type="text"
//             name="requirements"
//             placeholder="Write your requirements here"
//           />
//         </div>

//         <button type="submit" className="btn">
//           Request a quote
//         </button>
//       </form>
//     </QuoteStyles>
//   );
// };

// export default Quote;

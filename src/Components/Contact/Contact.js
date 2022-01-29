import React, { useState } from "react";
import "./contact.css";
import communicate from "../../assets/communicate.png";
import { RECAPTCHA } from "../../backend";
import ReCAPTCHA from "react-google-recaptcha";
import { createContact } from "./contactApiCall";

const input_style = {
  fontStyle: "italic",
};

const Contact = () => {
  const [contactUs, setContactUs] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    sending: false,
  });

  const { name, email, mobile, message, sending } = contactUs;

  console.log(contactUs);

  const [variefy, setVariefy] = useState({
    isVariefied: false,
  });
  const { isVariefied } = variefy;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setContactUs({ ...contactUs, [name]: value });
  };

  const onChange = (response) => {
    if (response) {
      setVariefy({
        isVariefied: true,
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Name must be filled");
    } else if (email === "") {
      alert("Email must be filled");
    } else if (mobile === "") {
      alert("mobile must be filled");
    } else if (message === "") {
      alert("message must be filled");
    } else if (isVariefied === false) {
      alert("Captcha not variefied");
    }

    if (name && email && mobile && message && isVariefied === true) {
      setContactUs({ ...contactUs, sending: true });
      createContact(contactUs).then((data) => {
        setContactUs({
          ...contactUs,
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      });
    }
  };

  const sendingMessage = () => {
    return (
      sending && (
        <div className="alert alert-info">
          <h4>Sending...</h4>
        </div>
      )
    );
  };

  return (
    <div className="contactus__page">
      <div className="container">
        <div className="communicate">
          <img src={communicate} alt="" />
          <h5>Contact Us</h5>
          <p>
            We Provide best services and we will be happy to know that we helped
            you by doing something. We have a good team to handle it. Happy
            shopping!
          </p>
        </div>
        <div className="contactus__input__page">
          <div className="contact__input">
            <h5>Contact us</h5>
            {sendingMessage()}
            <form>
              <div className="name__email">
                <input
                  onChange={handleChange("name")}
                  value={name}
                  style={input_style}
                  type="text"
                  placeholder="Name..."
                />
                <input
                  onChange={handleChange("email")}
                  value={email}
                  style={input_style}
                  type="email"
                  placeholder="Email..."
                />
              </div>
              <input
                onChange={handleChange("mobile")}
                value={mobile}
                style={input_style}
                type="text"
                placeholder="Mobile..."
              />
              <textarea
                onChange={handleChange("message")}
                value={message}
                style={input_style}
                rows="5"
                type="text"
                placeholder="Message..."
              />
              <ReCAPTCHA
                className="captcha"
                sitekey={RECAPTCHA}
                onChange={onChange}
              />
              <button style={{ marginTop: "1rem" }} onClick={submitForm}>
                Alright Submit it
              </button>
            </form>
          </div>
          <div className="contact__address">
            <p>Chandrashakher Azad Nagar</p>
            <p>Bhilwara, Rajasthan</p>
            <p>India</p>
            <div className="opening">
              <p>Opening Hours:</p>
              <p>Mo-fr 11:00-00:00, Sa-Su 15:00-00:00</p>
            </div>
            <div className="opening">
              <p>Support Email</p>
              <p>lotus@hindcorporation.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import "./contact.css";
import communicate from "../../assets/communicate.png";

const input_style = {
  fontStyle: "italic",
};

const Contact = () => {
  const submitForm = (e) => {
    e.preventDefault();
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
            <form>
              <div className="name__email">
                <input style={input_style} type="text" placeholder="Name..." />
                <input
                  style={input_style}
                  type="email"
                  placeholder="Email..."
                />
              </div>
              <input style={input_style} type="text" placeholder="Mobile..." />
              <textarea
                style={input_style}
                rows="5"
                type="text"
                placeholder="Message..."
              />
              <button onClick={submitForm}>Alright Submit it</button>
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

import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e5757350-b756-40bb-9d32-9724a07e0891");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <>
      <div id='contact'className='contact'>
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattern} alt="decorative pattern" />
        </div>

        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I am currently looking for fresher opportunities in development.</p>

            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="mail icon" />
                <p>ssowmyatiwari@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="phone icon" />
                <p>+91 9701078981</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="location icon" />
                <p>India</p>
              </div>
            </div>
          </div>

          <form onSubmit= {onSubmit}className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" name="name" />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" name="email" />

            <label htmlFor="message">Write your message here.</label>
            <textarea id="message" name="message" rows="8" placeholder="Enter your message here"></textarea>

            <button type="submit" className="contact-submit">Submit now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

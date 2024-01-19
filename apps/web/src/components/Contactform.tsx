import React from 'react';
// Importing the global CSS

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-container">
        <div className="form-header">
          <p className="contact-title">Contact</p>
          <p className="contact-subtitle">Ask us anything</p>
        </div>

        <div className="form-wrapper">
          <form
            action="https://getform.io/f/f65bf0f2-3755-4a96-b7f9-41a76de141b0" // Replace with your endpoint
            method="POST"
            className="contact-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input-field"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input-field email-field"
            />

            <textarea
              name="message"
              placeholder="Enter your message here"
              rows="10"
              className="input-field message-field"
            ></textarea>

            <button className="submit-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

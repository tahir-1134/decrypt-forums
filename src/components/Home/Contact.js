import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__element">CONTACT US</h2>
      <button className="contact__element">Sign up with Google</button>
      <span className="contact__link">or</span>
      <input className="contact__element" type="email" placeholder="Email"></input>
      <input className="contact__element" type="password" placeholder="Password"></input>
      <button className="contact__element">Create Account...</button>
      <span className="contact__link">Sign up with SAML SSO</span>
      <span className="contact__link">Already have an account ? Sign in</span>
    </div>
  );
}

export default Contact;

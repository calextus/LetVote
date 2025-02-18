import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Logo & Copyright */}
        <div className="footer-left">
          <h2 className="logo">LetVote</h2>
          <p>© {new Date().getFullYear()} LetVote. All rights reserved.</p>
        </div>

        {/* Center: Contact Information */}
        <div className="footer-center">
          <h3>Contact Us</h3>
          <p>Email: support@letvote.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Voting Street, Decentralized City</p>
        </div>

        {/* Right: Social Media */}
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon">Facebook</a>
            <a href="#" className="icon">Twitter</a>
            <a href="#" className="icon">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

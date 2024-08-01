// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer flex-space-around">
      <div className="connect_section">
        <h1 className="branding">Food index bd</h1>
        <div className="connectUS">
          <h5>Connect With US</h5>
          <a href="https://www.facebook.com/foodindexbd.info" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <div className="payment_method">
          <h5>Safe Payment</h5>
          <img src="https://freelogopng.com/images/all_img/1656234782bkash-app-logo.png" alt="Bkash" />
          <img src="https://freelogopng.com/images/all_img/1679248787Nagad-Logo.png" alt="nogot" />
        </div>
      </div>
      <div className="shopping footer_cart">
        <ul className="footer_item">
          <li className="footer_list">
            <h4 className="footer_heading">Company</h4>
            <ul className="sub_footer">
              <li className="sub_footer_list">
                <a href="#" className="sub_footer_link">About Us</a>
              </li>
              <li className="sub_footer_list">
                <a href="#" className="sub_footer_link">Return policy</a>
              </li>
              <li className="sub_footer_list">
                <a href="#" className="sub_footer_link">Refund policy</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer_cart">
        <ul className="footer_item">
          <li className="footer_list">
            <h4 className="footer_heading">Quick Help</h4>
            <ul className="sub_footer">
              <li className="sub_footer_list">
                <a href="about.html" className="sub_footer_link">Customer Service</a>
              </li>
              <li className="sub_footer_list">
                <a href="#" className="sub_footer_link">Contact</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="footer_cart">
        <ul className="footer_item">
          <div className="subscribe-newsletter">
            <label htmlFor="email" className="sub_title">Subscribe for newsletter :</label>
            <div className="sub-subscribe">
              <input type="email" className="email_input" id="email" name="email" placeholder="Notify your email" />
              <a href="#" className="subscribe_btn">subscribe</a>
            </div>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

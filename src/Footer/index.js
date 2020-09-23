import React from 'react';

import './style.css';

// Create Footer
const Footer = () => (
  <div className="Footer">
    <div className="Footer-Logo-Section">
      <img className="Footer-Logo-Icon" src="" alt="Logo"/>
      <a className="Footer-Logo-Title">WORKFOLIO</a>
    </div>
    <div className="Footer-Category">
      <a className="Footer-Category-Parent">Services</a>
      <a className="Footer-Category-Child">Promotion</a>
      <a className="Footer-Category-Child">WorkCoin</a>
      <a className="Footer-Category-Child">Branding</a>
      <a className="Footer-Category-Child">Recruiment Support</a>
    </div>
    <div className="Footer-Category">
      <a className="Footer-Category-Parent">SUPPORT</a>
      <a className="Footer-Category-Child">Contact us</a>
      <a className="Footer-Category-Child">FAQs</a>
      <a className="Footer-Category-Child">Locate nearest Office</a>
      <a className="Footer-Category-Child">Report an issue</a>
    </div>
    <div className="Footer-Category">
      <a className="Footer-Category-Parent">ABOUT</a>
      <a className="Footer-Category-Child">Our story</a>
      <a className="Footer-Category-Child">Team</a>
      <a className="Footer-Category-Child">Goals</a>
      <a className="Footer-Category-Child">Future Projects</a>
    </div>
    <div className="Footer-Category">
      <a className="Footer-Category-Parent">LEGAL</a>
      <a className="Footer-Category-Child">Our story</a>
      <a className="Footer-Category-Child">Team</a>
      <a className="Footer-Category-Child">Goals</a>
      <a className="Footer-Category-Child">Future Projects</a>
    </div>
    <div className="Footer-Category">
      <a className="Footer-Category-Parent">Follow us</a>
      <div className="Footer-Social-Section">
        <img src="" alt="fb" />
        <img src="" alt="tw" />
        <img src="" alt="ig" />
        <img src="" alt="wc" />
        <img src="" alt="in" />
      </div>
      <a className="Footer-Category-Parent">Subscribe Now:</a>
      <div className="Footer-Send-Email-Section">
        <input type="email" placeholder="Email"/>
        <img src="" alt="Send" />
      </div>
    </div>
  </div>
);

export default Footer;
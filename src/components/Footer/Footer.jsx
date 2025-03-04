import React from 'react'
import "./Footer.css";
import {facebookLogo,instagramLogo,twitterLogo} from "../../assets";
const Footer = () => {
  return (
    <footer id="footer" className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
            Sound<span className='red'>DZign</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="" />
              </a>
              <a href="#">
                <img src={instagramLogo} alt="" />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="" />
              </a>
            </div>

            <div className="copyright">
              This website is designed by Asif.pkml Ⓒ 2024
            </div>
            
          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div className="links">
            <h3>Contact Us</h3>

            <ul>
              <li>
                <a href="#">contact@email.com</a>
              </li>
              <li>
                <a href="#">+92 300 4567891</a>
              </li>
            </ul>

          </div>
          <div className="copyright mobile">
              This website is designed by Asif.pkml Ⓒ 2024
            </div>
        </div>
      </div>
    </footer>
  )
} 

export default Footer;
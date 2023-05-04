import React from "react";
import "./Footer.css";
import { Instagram as InstagramIcon } from "@mui/icons-material";
import { Facebook as FacebookIcon } from "@mui/icons-material";
import { Twitter as TwitterIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="login">
      <div className="joinUs">
        <span>Are you a journalist or an editor?</span>
          <Link to='/contact'>
            <button className="joinUs__button">Join Us</button>
          </Link>
      </div>
      <div className="footer__info">
        <div className="copyright">
          <p>Terms of service & privacy policy</p>
          <p>© Decrypt 2022</p>
        </div>
        <div className="footer__socialMedia">
          <span className="footer__socialMediaIcon">
            <InstagramIcon /> Instagram
          </span>
          <span className="footer__socialMediaIcon">
            <FacebookIcon /> Facebook
          </span>
          <span className="footer__socialMediaIcon">
            <TwitterIcon /> Twitter
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

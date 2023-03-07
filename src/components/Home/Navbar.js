import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

function Navbar() {
  const navLinks = ["NEWS", "FORUMS", "CONTACT", "LOGIN"];
  const [windowStatus, setWindowStatus] = useState(
    window.innerWidth > 900 ? true : false
  );

  function checkWindowSize() {
    setWindowStatus(window.innerWidth > 650 ? true : false);
  }
  window.onresize = checkWindowSize;

  const [display, setDisplay] = useState(!windowStatus);

  function displayMenu() {
    setDisplay(!display);
  }

  const mountedStyle = { animation: "inAnimation 250ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
  };

  return (
    <nav className="navbar">
      <h2 className="navbar__brand">DECRYPT</h2>
      {windowStatus ? (
        <ul className="navbar__links" type="none">
          {navLinks.map((item, index) => (
            <Link to={`/${item.toLowerCase()}`}>
              <p key={index}>{item}</p>
            </Link>
          ))}
        </ul>
      ) : display ? (
        <MenuIcon onClick={displayMenu} />
      ) : (
        <>
          <CloseIcon className="closeIcon" onClick={displayMenu} />
          <div className="hamburger" style={display? unmountedStyle : mountedStyle}>
            <ul className="navbar__menu" type="none">
              {navLinks.map((item, index) => (
                <Link to={`/${item.toLowerCase()}`}>
                  <p key={index}>{item}</p>
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;

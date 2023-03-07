import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  return (
    <div className="info">
      <h2 className="info__title">WHAT YOU GET</h2>
      <div className="info__body">
        <section className="info__section">
          <div>
            <img
              className="info__img"
              src={require("../../images/newspaper.png")}
              alt="image1"
            />
          </div>
          <div className="info__sectionContent">
            <h3>Get Updates</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/news">
              <button className="info__btn">Check it out!</button>
            </Link>
          </div>
        </section>
        <section className="info__section">
          <div>
            <img
              className="info__img"
              src={require("../../images/discussion.png")}
              alt="image2"
            />
          </div>
          <div className="info__sectionContent">
            <h3>Build a Community</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <Link to="/forums">
              <button className="info__btn">Check it out!</button>
            </Link>
          </div>
        </section>
        <section className="info__section">
          <div>
            <img
              className="info__img"
              src={require("../../images/book.png")}
              alt="image3"
            />
          </div>
          <div className="info__sectionContent">
            <h3>Learn</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/learn">
              <button className="info__btn">Check it out!</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Info;

import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <section className="homepage">
      <div className="homepage__left">
        <h1>
          <span className="brand"><img src={require("../../images/decryptLogo.png")} alt="" /></span>
        </h1>
        {/* <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </h3> */}
      </div>
    </section>
  );
}

export default Homepage;

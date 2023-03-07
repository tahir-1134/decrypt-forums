import React from "react";
import "./NewsHeader.css";
import { Link } from "react-router-dom";

function NewsHeader() {
    return (
    <header className="newsHeader">
      <h1>
        THE{" "}
        <span style={{ color: "#1C98ED", fontSize: "40px", fontWeight: "600" }}>
          DECRYPT
        </span>{" "}
        NEWS
      </h1>
        <div className="newsHeader__links">
          <Link to="/">
            <h3>Home</h3>
          </Link>
          <Link to="/forums">
            <h3>Forums</h3>
          </Link>
        </div>
    </header>
  );
}

export default NewsHeader;

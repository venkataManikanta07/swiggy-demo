import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="image-container">
        <img alt="HeaderImage" className="headerImage" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/" id="home-navigators">
            Home
          </Link>
          <Link to="/about" id="home-navigators">
            About us
          </Link>
          <Link to="/contact" id="home-navigators">
            Contact us
          </Link>
          <Link id="home-navigators"> Cart</Link>
          <Link id="home-navigators"> Cart</Link>
        </ul>
      </div>
    </div>
  );
}

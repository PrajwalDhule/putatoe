import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import location from "../assets/images/location.svg";
import bell from "../assets/images/bell.svg";
import cart from "../assets/images/cart.svg";
import search from "../assets/images/search.svg";
import mic from "../assets/images/mic.svg";

const Navbar = () => {
  return (
    <div className="nav-body">
      <div className="nav-1">
        <div className="location-bar">
          <img src={location} className="location icon" />
          <input type="text"></input>
        </div>
        <img src={bell} className="bell icon" />
        <img src={cart} className="cart icon" />
      </div>
      <div className="nav-2">
        <div className="searchbar">
          <img src={search} className="search icon" />
          <input type="text" placeholder="Search for Products..."></input>
        </div>
        <img src={mic} className="mic icon" />
      </div>
    </div>
  );
};

export default Navbar;

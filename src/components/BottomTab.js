import React from "react";
import home from "../assets/images/home.svg";
import profile from "../assets/images/profile.svg";
import list from "../assets/images/list.svg";
import chat from "../assets/images/chat.svg";
import logo from "../assets/images/logo.png";

const BottomTab = () => {
  return (
    <div className="bottom-tab-body">
      <div className="option">
        <img src={home}></img>
        <p>Home</p>
      </div>
      <div className="option">
        <img src={profile}></img>
        <p>Profile</p>
      </div>
      <div className="option">
        <img className="logo" src={logo}></img>
      </div>
      <div className="option">
        <img src={list}></img>
        <p>Follow List</p>
      </div>
      <div className="option">
        <img src={chat}></img>
        <p>Chat</p>
      </div>
    </div>
  );
};

export default BottomTab;

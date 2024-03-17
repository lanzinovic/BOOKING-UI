import React from "react";
import "./MailList.css";

export default function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send you the best deals
      </span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

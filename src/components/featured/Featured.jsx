import React from "react";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/474x/0f/8b/a5/0f8ba5b8d78ed7c43ababd190aafb282.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lake Calhoun</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/474x/01/6e/ab/016eaba835b4ae2b4743c8c145586f93.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Exterior Stone</h1>
          <h2>542 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/474x/fe/26/cc/fe26cc69e593fa5b9a990a897eb6ff29.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>2-Car Garage</h1>
          <h2>274 Properties</h2>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">NewsMonkey.</div>
      <ul className="vertical">
        <li>
          <a href="/">General</a>
        </li>
        <li>
          <a href="/">Entertainment</a>
        </li>
        <li>
          <a href="/">Business</a>
        </li>
        <li>
          <a href="/">Health</a>
        </li>
        <li>
          <a href="/">Science</a>
        </li>
        <li>
          <a href="/">Sports</a>
        </li>
        <li>
          <a href="/">Technology</a>
        </li>
      </ul>
      <div className="form">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;

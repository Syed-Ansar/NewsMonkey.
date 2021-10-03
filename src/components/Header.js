import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <a style={{ border: "none" }} className="logo" href="/">
        NewsMonkey.
      </a>
      <header>
        <div>
          <ul className="vertical">
            <li>
              <Link to="/">General</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/health">Health</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="form">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;

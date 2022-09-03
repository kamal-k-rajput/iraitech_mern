import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="login">
          {" "}
          <li>LOG IN</li>
        </Link>
        <Link to="register">
          {" "}
          <li>REGISTER</li>
        </Link>
        <Link to="profile">
          {" "}
          <li>PROFILE</li>
        </Link>
      </ul>
    </div>
  );
};

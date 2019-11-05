import React from "react";

import "./Navigation.css";
const Navigation = props => {
  return (
    <nav className="main-nav">
      <ul className="nav-items">
        <li>Home</li>
        <li>Users</li>
      </ul>
      
      {props.isAuthenticated ? (
        <ul className="auth-menu">
          <li>
            <a href="#" className="logout-button" onClick={props.onLogout}>
              Logout RaseL
            </a>
          </li>
        </ul>
      ) : (
        <ul className="auth-menu">
          <li>
            <a href="#" className="logout-button" onClick={props.onLogin}>
              Sign In
            </a>
          </li>
          <li>
            <a href="#" className="logout-button" onClick={props.onLogin}>
              Sign Up
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;

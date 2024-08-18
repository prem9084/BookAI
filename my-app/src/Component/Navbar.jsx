import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BookAi
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 gap-5">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                OVERVIEW
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Authentication
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Endpoints
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tutorial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Code Examples
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button onClick={toggleTheme} className="btn btn-outline-secondary">
              {isDarkMode ? <FaSun /> : <FaMoon />}{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

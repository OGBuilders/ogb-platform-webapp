import React, { Component } from "react";
import ogblogo from "../utils/svg/ogblogo.svg";
import { NavLink } from "react-router-dom";

import ContactModal from "../utils/Modal/contactModal";

import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      isActive: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState((prev, props) => {
      const newState = !prev.isActive;
      return { isActive: newState };
    });
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  render() {
    return (
      <div className="nav-custom">
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <img className="navbar-item" alt="Logo" src={ogblogo}></img>

            <a
              onClick={this.toggleNav}
              role="button"
              className={`navbar-burger burger ${
                this.state.isActive ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}
          >
            <div className="navbar-start">
              <p className="navbar-item">
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </p>

              <p className="navbar-item">
                <NavLink exact to="/about" activeClassName="active">
                  About
                </NavLink>
              </p>

              <p className="navbar-item">
                <NavLink exact to="/help" activeClassName="active">
                  Help
                </NavLink>
              </p>

              {/* <p className="navbar-item">
                <NavLink exact to="/blog" activeClassName="active">
                  Blog
                </NavLink>
              </p> */}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    className="button button-custom"
                    onClick={this.toggleModal}
                  >
                    Build with us
                  </a>
                </div>
              </div>
            </div>
            <ContactModal
              modalState={this.state.modalState}
              toggleModal={this.toggleModal}
            ></ContactModal>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

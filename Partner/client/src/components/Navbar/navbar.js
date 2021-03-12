import React, { Component } from "react";
import ogblogo from "../utils/svg/ogblogo.svg";

import { NavLink, withRouter } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";

import { Link } from "react-scroll";

import Button from "../utils/button/button";

import "./navbar.css";

let path;
class Navbar extends Component {
  componentDidMount() {
    const { pathname } = this.props.location;
    const arr = pathname.split("/");
    path = arr[1];
  }

  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      isActive: false,
      login: {
        email: "",
        password: "",
        checked: false,
      },
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.setCheck = this.setCheck.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  toggleNav() {
    this.setState((prev, props) => {
      const newState = !prev.isActive;
      return { isActive: newState };
    });
  }

  onChange(e) {
    this.setState({
      login: { ...this.state.login, [e.target.name]: e.target.value },
    });
  }

  setCheck(e) {
    this.setState({
      login: { ...this.state.login, checked: e.target.checked },
    });
  }

  goHome(e) {
    e.preventDefault();
    if (path !== "") {
      this.props.history.push("/");
    }
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  onSubmitForm(e) {
    e.preventDefault();

    console.log(this.state.login);
    this.toggleModal();
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
            <img
              className="navbar-item"
              alt="Logo"
              src={ogblogo}
              onClick={this.goHome}
            ></img>

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
                <Link
                  to="about"
                  activeClassName="active"
                  duration={500}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  onClick={this.goHome}
                >
                  About
                </Link>
              </p>

              <p className="navbar-item">
                <NavLink exact to="/help" activeClassName="active">
                  Help
                </NavLink>
              </p>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <Button name="Register" path="register"></Button>
                <Button name="Log In" path="login"></Button>
              </div>
            </div>
          </div>
        </nav>

        {/* <Modal
            closeModal={this.toggleModal}
            modalState={this.state.modalState}
            title="Login"
          >
            <div className="login">
              <div className="field login-field">
                <label className="label" style={{ fontWeight: "600" }}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    onChange={this.onChange}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="field login-field">
                <label className="label" style={{ fontWeight: "600" }}>
                  Password
                </label>
                <div className="control">
                  <input
                    className="input login-input"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={this.onChange}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="field login-field">
                <div className="control">
                  <label
                    className="checkbox"
                    name="checked"
                    onChange={this.setCheck}
                    style={{ marginTop: "8px", marginBottom: "8px" }}
                  >
                    <input type="checkbox" /> Remember Me
                  </label>
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button className="button" onClick={this.onSubmitForm}>
                    Submit
                  </button>
                </div>
              </div>

              <div
                className="field is-grouped"
                style={{ textAlign: "center", display: "block" }}
              >
                <div className="control">
                  <a href="" className="a-link">
                    Forgot Password
                  </a>
                </div>
              </div>
            </div>
          </Modal> */}
      </div>
    );
  }
}
export default withRouter(Navbar);

import React, { Component } from "react";
import "./login.css";

import login_illustration from "../../../components/utils/svg/login.svg";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        email: "",
        password: "",
        checked: false,
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.setCheck = this.setCheck.bind(this);
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

  onSubmitForm(e) {
    e.preventDefault();

    console.log(this.state.login);
  }

  render() {
    return (
      <div className="login-component">
        <div className=" login-columns columns">
          <div className="column is-4 illustration-column">
            <img src={login_illustration}></img>

            <p
              style={{
                color: "white",
                padding: "20px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <span className="bold">
                Let’s Log In<br></br>
              </span>
              Helping you find new clients, and simplify civil construction.{" "}
            </p>
          </div>
          <div className="column is-5 credential-column">
            <div className="heading1" style={{ fontSize: "32px" }}>
              Log In
            </div>
            <br></br>
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
                  style={{ width: "85%", background: "white" }}
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
                  style={{ width: "85%", background: "white" }}
                />
              </div>

              <div className="field login-fieldd" style={{ marginTop: "5px" }}>
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
                  <button className="button-login" onClick={this.onSubmitForm}>
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;

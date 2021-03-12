import React, { Component } from "react";

import register_illustration from "../../../components/utils/svg/login.svg";
import Register_form from "../../landingPage/Register/register";

import "./register.css";

export default class register extends Component {
  render() {
    return (
      <div className="register-component">
        <div className="columns">
          <div className="column is-4 register-illustration-column">
            <img src={register_illustration} className="illus"></img>

            <p
              style={{
                color: "white",
                padding: "20px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <span className="bold">
                Let’s Register<br></br>
              </span>
              Helping you find new clients, and simplify civil construction.{" "}
            </p>
          </div>
          <div className="column is-5 register-credential-column">
            <Register_form bgcolor="white"></Register_form>
          </div>
        </div>
      </div>
    );
  }
}

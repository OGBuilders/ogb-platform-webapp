import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import isEmpty from "../../../components/utils/isEmpty";

import "./register.css";
import PrivacyPolicy from "../../../statics/Privacy Policy.pdf";
import TermsOfUse from "../../../statics/Terms of Use.pdf";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      // email: "",
      mobile: "",
      hasGovtLicense: "",
      acceptTC: true,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.setCheck = this.setCheck.bind(this);
    this.validate = this.validate.bind(this);
  }

  onSubmitForm(e) {
    e.preventDefault();

    // Send POST Request to the API
    var formBody = [];
    for (var property in this.state) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(this.state[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);
    fetch("http://35.209.131.147/partner/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("An error occurred:\n", error);
      });
    console.log(formBody);
    this.props.history.push("/confirm");
  }

  validate() {
    return (
      !isEmpty(this.state.name) &&
      // !isEmpty(this.state.email) &&
      // RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email) &&
      !isEmpty(this.state.mobile) &&
      !isEmpty(this.state.hasGovtLicense) &&
      this.state.acceptTC === true
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setCheck(e) {
    this.setState({ acceptTC: !this.state.acceptTC });
  }

  render() {
    return (
      <div className="register">
        <div className="register-heading">Register as a contractor</div>
        <div className="register-heading-secondary">
          All fields are mandatory
        </div>
        <div className="field">
          <label className="label">Full Name</label>
          <div className="control">
            <input
              className={`input ${
                this.props.bgcolor === "white" ? "whiteinput" : ""
              }`}
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={this.onChange}
              required
            />
          </div>
        </div>
        {/* <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" name="email" placeholder="Enter Your Email" onChange={this.onChange} />
          </div>
        </div> */}
        <div className="field">
          <label className="label">Contact Number</label>
          <div className="control">
            <input
              className={`input ${
                this.props.bgcolor === "white" ? "whiteinput" : ""
              }`}
              type="text"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              onChange={this.onChange}
              required
              style={{ backgroundColor: "{this.props.bgcolor}" }}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">
              Are you a licensed government contractor?<br></br>
            </label>

            <label className="radio ">
              <input
                type="radio"
                value={true}
                name="hasGovtLicense"
                onChange={this.onChange}
              />{" "}
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                value={false}
                name="hasGovtLicense"
                onChange={this.onChange}
              />{" "}
              No
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox" onChange={this.setCheck}>
              <input type="checkbox" checked={this.state.acceptTC} /> I agree to
              the{" "}
              <a
                className="a-link"
                href={TermsOfUse}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </a>
              <br></br> and
              <a
                className="a-link"
                href={PrivacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Privacy Policy
              </a>
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              className="button"
              disabled={!this.validate()}
              onClick={this.onSubmitForm}
            >
              Register as Partner
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);

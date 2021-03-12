import React, { Component } from "react";
import Modal from "./buildmodal";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCustomerInfo } from "../../../actions/contactAction";

class contactModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      status: false,

      otherfield: false,
      contact: {
        name: "",
        contact: "",
        projectoption: "",
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  checkOption() {
    if (this.state.contact.projectoption === "Other") {
      this.setState({ otherfield: true });
    } else {
      this.setState({ otherfield: false });
    }
  }

  handleChange(e) {
    this.setState(
      { contact: { ...this.state.contact, projectoption: e.target.value } },
      this.checkOption
    );
    console.log(this.state.contact.projectoption);
  }

  onChange(e) {
    this.setState({
      contact: { ...this.state.contact, [e.target.name]: e.target.value },
    });
  }

  toggleModal() {
    this.props.toggleModal();
  }

  onSubmitForm(e) {
    e.preventDefault();

    if (
      this.state.contact.name !== "" &&
      this.state.contact.contact !== "" &&
      this.state.contact.projectoption !== ""
    ) {
      this.props.setCustomerInfo(this.state.contact);
    }
  }

  render() {
    const { customerInfo } = this.props.customerContact;
    return (
      <div>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.props.modalState}
          title="Tell us about you"
          status={customerInfo}
        >
          <div className="build-with-us">
            <p style={{ color: "#20b560" }}>*All fields are mandatory*</p>
            <div className="field build-with-us-field">
              <label className="label" style={{ fontWeight: "600" }}>
                Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  onChange={this.onChange}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="field build-with-us-field">
              <label className="label" style={{ fontWeight: "600" }}>
                Contact
              </label>
              <div className="control">
                <input
                  className="input login-input"
                  type="tel"
                  name="contact"
                  placeholder="Enter contact number"
                  onChange={this.onChange}
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="field build-with-us-field">
              <label className="label" style={{ fontWeight: "600" }}>
                Project Type
              </label>
              <div className="control">
                <div className="select is-success">
                  <select onChange={this.handleChange}>
                    <option value="">--Select option--</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Other">Others (please specify)</option>
                  </select>
                </div>
              </div>
            </div>

            {this.state.otherfield ? (
              <div className="field build-with-us-field">
                <label className="label" style={{ fontWeight: "600" }}>
                  Specify Project Type
                </label>
                <div className="control">
                  <input
                    className="input login-input"
                    type="text"
                    name="projectoption"
                    placeholder="Specify project type"
                    onChange={this.onChange}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="field is-grouped">
              <div className="control-button">
                <button
                  className="button button-modal"
                  onClick={this.onSubmitForm}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

contactModal.propTypes = {
  setCustomerInfo: PropTypes.func.isRequired,
  customerContact: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  customerContact: state.customerContact,
});

export default connect(mapStateToProps, { setCustomerInfo })(contactModal);

import React, { Component } from "react";

import { withCookies } from "react-cookie";
import { CSSTransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import { setLanguage } from "../../../actions/languageActions";

import "./modal.css";

class languageModal extends Component {
  state = {
    open: this.props.trigger,
  };

  setEnglish = () => {
    this.props.cookies.set("language", "english", { path: "/" });
    this.props.setLanguage("english");
    this.onCloseModal();
  };

  setHindi = () => {
    this.props.cookies.set("language", "hindi", { path: "/" });
    this.props.setLanguage("hindi");
    this.onCloseModal();
  };

  onCloseModal = () => {
    console.log("function ke andar");
    this.setState({ open: false });
  };
  render() {
    let content;
    const { cookies } = this.props;

    console.log(this.state.open);
    if (this.state.open === true) {
      content = (
        <div id="js-cookie-box" className="cookie-box">
          <div className="cookie-content">
            <h2 className="language-modalheading">
              Select your <span className="green bold">preferred </span>
              language{" "}
            </h2>{" "}
            <button
              className="button is-primary language-button"
              onClick={this.setEnglish}
            >
              English
            </button>
            <button
              className="button is-primary language-button"
              onClick={this.setHindi}
            >
              Hindi
            </button>
          </div>
          <button
            onClick={this.onCloseModal}
            style={{
              background: "transparent",
              outline: "none",
              border: "none",
            }}
          >
            <i className="fas fa-times close-icon"></i>
          </button>
        </div>
      );
    } else {
      content = "";
    }
    return (
      <div>
        <CSSTransitionGroup
          transitionName="faq"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {content}
        </CSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cookies: ownProps.cookies,
    language: state.language,
  };
};

export default withCookies(
  connect(mapStateToProps, { setLanguage })(languageModal)
);

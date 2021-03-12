import React, { Component } from "react";

import { withCookies } from "react-cookie";

import { connect } from "react-redux";
import { setLanguage } from "../../actions/languageActions";
import { CSSTransitionGroup } from "react-transition-group";

import Navbar from "../../components/Navbar/navbar";
import Landing from "./Landing/landing";
import Footer from "../../components/Footer/footer";
import LanguageModal from "../../components/utils/Modal/languageModal";

class landingpage extends Component {
  constructor() {
    super();
    this.state = {
      language: true,
    };
  }

  componentWillMount() {
    if (
      this.props.cookies.get("language") === "english" ||
      this.props.cookies.get("language") === "hindi"
    ) {
      console.log("cookies condition shi hai");
      this.props.setLanguage(this.props.cookies.get("language"));

      this.setState({ language: false });
      console.log(this.state.language);
    }
  }

  render() {
    return (
      <div>
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <Navbar></Navbar>
          <Landing></Landing>
          <LanguageModal trigger={this.state.language}></LanguageModal>
          <Footer></Footer>
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
  connect(mapStateToProps, { setLanguage })(landingpage)
);

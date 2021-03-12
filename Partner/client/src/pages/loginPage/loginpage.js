import React, { Component } from "react";

import { CSSTransitionGroup } from "react-transition-group";
import Navbar from "../../components/Navbar/navbar";
import LoginComponent from "./login/login";
import Footer from "../../components/Footer/footer";

class loginpage extends Component {
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
          <LoginComponent></LoginComponent>
          <Footer></Footer>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default loginpage;

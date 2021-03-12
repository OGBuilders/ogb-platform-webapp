import React, { Component } from "react";

import { CSSTransitionGroup } from "react-transition-group";
import Navbar from "../../components/Navbar/navbar";
import RegisterComponent from "./register/register";
import Footer from "../../components/Footer/footer";

class registerpage extends Component {
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
          <RegisterComponent></RegisterComponent>
          <Footer></Footer>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default registerpage;

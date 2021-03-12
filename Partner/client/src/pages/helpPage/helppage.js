import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import Navbar from "../../components/Navbar/navbar";
import Help from "./help/Help";
import Footer from "../../components/Footer/footer";

const helppage = () => {
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
        <Help></Help>
        <Footer></Footer>
      </CSSTransitionGroup>
    </div>
  );
};

export default helppage;

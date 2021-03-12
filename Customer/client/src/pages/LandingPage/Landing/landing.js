import React, { Component } from "react";

import aboutUsSvg from "../../../components/utils/svg/about_us.svg";
import Timeline from "../Timeline/timeline";
import USP from "../USP/usp";

import ContactModal from "../../../components/utils/Modal/contactModal";

import "./landing.css";

class landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      isActive: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState((prev, props) => {
      const newState = !prev.isActive;
      return { isActive: newState };
    });
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      return { modalState: newState };
    });
  }

  render() {
    return (
      <div className="main">
        <div className="landing-circle "></div>
        <div className="columns landing">
          <div className="column landing-column">
            <div className="landing-heading">
              Construction <br></br>
              <span className="green slant">simplified </span>, from<br></br>{" "}
              designing to delivering.<br></br>
            </div>
            <div className="control">
              <button className="button-home" onClick={this.toggleModal}>
                Build with us
              </button>
            </div>
          </div>
          <div className="column is-two-thirds picture-column"></div>
        </div>

        <div className="columns intro landing-intro">
          <div className="column is-two-thirds">
            <div className="heading1">Who we are?</div>
            <br></br>
            <div className="content1">
              <span className="bold">One Grade Builders</span> is a construction
              platform that simplifies civil construction of all scales. We
              provide end-to-end construction services from design and drawings
              to handover with accurate estimations, process transparency,
              timely delivery and best-in-class workmanship by professional
              contractors. Whether it’s a new farmhouse or your dream home, we
              make the execution of your idea easier.
            </div>
            <br></br>
            <div className="greenLine"></div>
          </div>
          <div className="column illustration">
            <img src={aboutUsSvg} alt="About Us illustration"></img>
          </div>
        </div>

        <Timeline></Timeline>

        <USP></USP>
      
        <div className="contactnotify has-text-centered">
          <h3>Get your personalized solution today!< br></br> Call us at <a href="tel://+91 80056 14503">+91 80056 14503</a> or {' '}
            <button className="button-home-outline" onClick={this.toggleModal}>
              Build with us
            </button>
          </h3>
        </div>

        <ContactModal
          modalState={this.state.modalState}
          toggleModal={this.toggleModal}
        ></ContactModal>
      </div>
    );
  }
}

export default landing;

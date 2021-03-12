import React, { Component } from "react";
import "./timeline.css";

import ContactModal from "../../../components/utils/Modal/contactModal";

import step1 from "../../../components/utils/svg/timeline/illustration1.svg";
import step2 from "../../../components/utils/svg/timeline/illustration2.svg";
import step3 from "../../../components/utils/svg/timeline/illustration3.svg";
import step4 from "../../../components/utils/svg/timeline/illustration4.svg";
import step5 from "../../../components/utils/svg/timeline/illustration5.svg";
import step6 from "../../../components/utils/svg/timeline/illustration6.svg";

class timeline extends Component {
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
      <div className="landing-timeline">
        <div className=" timeline-header">
          How it <span className="green">works?</span>
        </div>
        <div className="timeline is-centered">
          {/* <header className="timeline-header">
          <span className="tag is-medium is-primary">Start</span>
        </header> */}
          <div className="timeline-item is-primary">
            <div className="timeline-marker  custom-marker"></div>
            <div className="timeline-content">
              <div className="timeline-details right-content">
                <div className="timeline-steps">
                  <p className="heading-timeline">Step 1</p>
                </div>
                <div className="timeline-picture">
                  <img src={step1} alt="step1" className="picture"></img>
                </div>
              </div>
              <p className="timeline-info short ">
                Call or{" "}
                <button className="button-timeline" onClick={this.toggleModal}>
                  Click here
                </button>{" "}
                to start your process or a related inquiry<br></br>
              </p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-32x32 custom-marker"></div>
            <div className="timeline-content">
              <div className="timeline-details right-content reverse-column">
                <div className="timeline-picture ">
                  <img src={step2} alt="step2" className="picture"></img>
                </div>
                <div className="timeline-steps">
                  <p className="heading-timeline">Step 2</p>
                </div>
              </div>
              <p className="timeline-info left-content">
                Our representative visits you to consolidate your idea. A site
                tour and some basic questions later, we're good to go!
              </p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-32x32 custom-marker"></div>
            <div className="timeline-content">
              <div className="timeline-details right-content">
                <div className="timeline-steps">
                  <p className="heading-timeline">Step 3</p>
                </div>
                <div className="timeline-picture">
                  <img src={step3} alt="step3" className="picture"></img>
                </div>
              </div>

              <p className="timeline-info timeline-content">
                We revert back with detailed estimation, design and drawings
                along with payment timelines
              </p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-32x32 custom-marker"></div>
            <div className="timeline-content">
              <div className="timeline-details right-content reverse-column">
                <div className="timeline-picture">
                  <img src={step4} alt="step4" className="picture"></img>
                </div>
                <div className="timeline-steps">
                  <p className="heading-timeline">Step 4</p>
                </div>
              </div>

              <p className="timeline-info left-content">
                You sign the final agreement with us, and the project execution
                begins
              </p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-32x32 custom-marker"></div>
            <div className="timeline-content">
              <div className="timeline-details right-content">
                <div className="timeline-steps">
                  <p className="heading-timeline">Step 5</p>
                </div>
                <div className="timeline-picture">
                  <img src={step5} alt="step5" className="picture"></img>
                </div>
              </div>

              <p className="timeline-info">
                As your site is under construction, you can monitor and manage
                it’s lifecycle through the OGB Platform
              </p>
            </div>
          </div>

          <div className="timeline-item is-primary">
            <div className="timeline-marker is-32x32 custom-marker"></div>
            <div className="timeline-content">
              <div className="timeline-details right-content reverse-column">
                <div className="timeline-picture">
                  <img src={step6} alt="step6" className="picture"></img>
                </div>
                <div className="timeline-steps">
                  <p className="heading-timeline">Step 6</p>
                </div>
              </div>

              <p className="timeline-info left-content">
                Upon completion, we handover your newly built project and it’s
                detailed report to you
              </p>
            </div>
          </div>

          {/* <header className="timeline-header">
          <span className="tag is-primary">2017</span>
        </header>
        <div className="timeline-item is-danger">
          <div className="timeline-marker is-danger is-icon">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading">March 2017</p>
            <p>Timeline content - Can include any HTML element</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-medium is-primary">End</span>
        </header> */}

          <ContactModal
            modalState={this.state.modalState}
            toggleModal={this.toggleModal}
          ></ContactModal>
        </div>
      </div>
    );
  }
}

export default timeline;

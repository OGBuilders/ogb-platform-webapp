import React, { Component } from "react";

import openButton from "../../../components/utils/svg/openButton.svg";
import closeButton from "../../../components/utils/svg/closeButton.svg";

import "./help.css";

class Help extends Component {
  state = {
    faqs: [
      {
        id: "1",
        qn: "How does OGB define a project’s timeline and value estimation?",
        ans:
          "We use standard automated procedure for estimation using Bill of Quantities (BOQ) and labour costs for the duration of the project. Your project is broken into multiple atomic milestones with pre-defined targets. Estimations are done per milestone considering the materials and labour required. You only pay for the milestones we complete.",
        open: false,
      },
      {
        id: "2",
        qn: "What is OGB Platform?",
        ans:
          "OGB Platform is a web application that you can access through your Personal Computer, Tablet or Phone. Through this, you get real-time updates on your project's progress which you can share with your family and friends.",
        open: false,
      },
      {
        id: "3",
        qn: "How does OGB ensure payment security and privacy?",
        ans:
          "We at OGB are committed to trust, transparency and sincerity. We give you the freedom to chose from a variety of payment timelines for the most comfortable experience. Depending upon the timeline and estimated milestones for your project, you deposit the sum for each milestone before it's commencement. We do not charge you if the milestone is not completed.",
        open: false,
      },
      {
        id: "4",
        qn: "What measures OGB takes to certify the quality of a project?",
        ans:
          "Our site-engineers and quality assurance team validates all materials, equipments, techniques as well as engineering practices that are used throughout the lifecycle of your project. We monitor everything, from the grade of steel being used for the structure to each tile in your kitchen.",
        open: false,
      },
    ],
  };

  handleClick = (id) => {
    this.setState((state) => ({
      ...state,
      faqs: state.faqs.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      ),
    }));
  };

  render() {
    return (
      <div>
        <div className="greenCircleSmall"></div>
        <div className="help">
          <div className="main-header">
            <span className="green">Know</span> more here
          </div>
          <div className="faqs">
            <div className="helpquery">
              {this.state.faqs.map((item) => (
                <div className="query-options" key={item.id}>
                  <div
                    className="query-main"
                    onClick={() => this.handleClick(item.id)}
                  >
                    <p className="query-heading ">{item.qn}</p>
                    {!item.open ? (
                      <img
                        src={openButton}
                        alt="Open Button"
                        className="query-expand-button"
                      ></img>
                    ) : (
                      <img
                        src={closeButton}
                        alt="Close Button"
                        className="query-expand-button"
                      ></img>
                    )}
                  </div>
                  {item.open ? <div className="faq-ans">{item.ans}</div> : ""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;

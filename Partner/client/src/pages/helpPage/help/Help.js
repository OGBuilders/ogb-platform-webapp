import React, { Component } from "react";

import openButton from "../../../components/utils/svg/openButton.svg";
import closeButton from "../../../components/utils/svg/closeButton.svg";

import { CSSTransitionGroup } from "react-transition-group";

import "./help.css";

class Help extends Component {
  state = {
    faqs: [
      {
        id: "5",
        qn: "Where can I get new tenders?",
        ans:
          "You can apply for projects (private construction tenders) on the OGB Platform. If you’re not already an onboarded contractor, you will need to register to get access for it. After onboarding, you will have access to the OGB Platform through which you can apply for new projects.",
        open: false,
      },
      {
        id: "1",
        qn: "What is the payment schedule?",
        ans:
          "Your project lifecycle on the OGB Platform is built on integral and incremental milestones. These milestones have detailed specifications regarding which tasks should be completed by the end of it’s duration, agreed upon by the customer. You will be entitled to payouts after each milestone completion.",
        open: false,
      },
      {
        id: "2",
        qn: "How is the estimation for a project done?",
        ans:
          "After the customer provides their project details, OGB constructs a detailed Bill Of Quantity for the project through OGB Evaluation System based on standard market rates and posts the Projects on the OGB Platform. These projects include detailed drawings, bill of quantities (BOQ), site location, project value along with other specifications for you to consider before applying.",
        open: false,
      },
      {
        id: "3",
        qn: "How do I apply for a live project?",
        ans:
          "After you’re onboarded, OGB Platform consistently posts new construction projects and gives you a diverse pool of commercial and residential projects to pick from. Once you apply for the project, OGB Platform evaluates all applications and offers the project to the best matched partner.",
        open: false,
      },
      {
        id: "4",
        qn: "I'm not a licensed contractor, can I still register?",
        ans:
          "We encourage non-licensed contractors to obtain a Government License through a registered authority. You can still register on the platform and undergo the onboarding process upon verification.",
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
        <div className="help-div">
          <div className="main-header">
            Find your <span className="green"> query</span> here
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

                  <CSSTransitionGroup
                    transitionName="faq"
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                  >
                    {item.open ? <div className="faq-ans">{item.ans}</div> : ""}
                  </CSSTransitionGroup>
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

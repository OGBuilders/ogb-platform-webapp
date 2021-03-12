import React, { Component } from "react";

import aboutUsSvg from "../../../components/utils/svg/about_us.svg";
import { connect } from "react-redux";

import whyUs_1 from "../../../components/utils/svg/1il.svg";
import whyUs_2 from "../../../components/utils/svg/2il.svg";
import whyUs_3 from "../../../components/utils/svg/3il.svg";
import whyUs_4 from "../../../components/utils/svg/4il.svg";
import whyUs_5 from "../../../components/utils/svg/5il.svg";

import registration from "../../../components/utils/svg/registration.svg";
import verify from "../../../components/utils/svg/verify.svg";
import confirmation from "../../../components/utils/svg/confirm.svg";

import "./aboutus.css";

class Aboutus extends Component {
  render() {
    const { language } = this.props;

    return (
      <div className="about" id="about">
        <div className="columns intro">
          <div className="column is-two-thirds">
            <div className="heading1">
              {language.language === "hindi"
                ? `
हम कौन है?`
                : `Who are we?`}
            </div>
            <br></br>

            <p>
              {language.language === "hindi"
                ? `ओजी बिल्डर्स एक नई पीढ़ी का निर्माण संगठन है जो उपयोगकर्ताओं को निजी और वाणिज्यिक निर्माण परियोजनाओं के लिए अनुभवी और पेशेवर ठेकेदारों को काम पर रखने और प्रोजेक्ट जीवनचक्र को कारगर बनाने के लिए एक डिजिटल-पहला मंच प्रदान करता है।`
                : `OG Builders is a new generation construction organization which provides users a digital-first platform to hire
              experienced and professional contractors for private and commercial construction projects and streamline project
              lifecycle.`}
            </p>
            <br></br>
            <div className="greenLine"></div>
          </div>
          <div className="column image-column has-text-centered">
            <img src={aboutUsSvg} alt="About Us illustration"></img>
          </div>
        </div>

        <div className="whyUs">
          <div className="heading1" style={{ textAlign: "center" }}>
            Why us?
            <div className="onboarding-line"></div>
          </div>
          <br></br>
          <div className="columns whyUs-column">
            <div className="column is-half whyUs_content">
              <p>
                <span className="bold">New Leads: </span>You get notifications
                for new projects on Item Rate with detailed requirements to
                apply for in multiple sectors, be it commercial projects or a
                residential building. We don’t charge you for new project leads,
                and never will.
              </p>
            </div>
            <div className="column image-column has-text-centered">
              <img src={whyUs_1} alt="Why Us"></img>
            </div>
          </div>

          <div className="columns invert-direction whyUs-column">
            <div className="column image-column has-text-centered">
              <img src={whyUs_2} alt="Why Us"></img>
            </div>
            <div className="column is-half whyUs_content">
              <p>
                <span className="bold">Free Registration: </span>OGB Platform is
                free and will remain free for licensed and experienced
                contractors for registration. Just head on to the home page to
                register now.
              </p>
            </div>
          </div>

          <div className="columns whyUs-column">
            <div className="column is-half whyUs_content">
              <p>
                <span className="bold">Payment Security: </span>You get paid for
                each predefined milestone you complete. So no more excuses from
                the customer about refusal or delayed payment.
              </p>
            </div>
            <div className="column image-column has-text-centered">
              <img src={whyUs_3} alt="Why Us"></img>
            </div>
          </div>

          <div className="columns invert-direction whyUs-column">
            <div className="column image-column has-text-centered">
              <img src={whyUs_4} alt="Why Us"></img>
            </div>
            <div className="column is-half whyUs_content">
              <p>
                <span className="bold">Simplified Project Workflow: </span>
                Predefined milestones based on timeline along with detailed
                project specifications. No more late payments or guessing about
                project details
              </p>
            </div>
          </div>

          <div className="columns whyUs-column">
            <div className="column is-half whyUs_content">
              <p>
                <span className="bold">Work Completion Certificate: </span>
                You’ll be rewarded for each project you complete and will be
                more likely to be picked for new projects. You also get an OGB
                Work Completion Certificate!
              </p>
            </div>
            <div className="column image-column has-text-centered">
              <img src={whyUs_5} alt="Why Us"></img>
            </div>
          </div>
        </div>

        <div className="onboarding">
          <div className="greenCircleSmall"></div>
          <div className="onboarding-heading">
            <div className="heading2">Onboarding</div>
            <div className="onboarding-line"></div>

            <div className="columns onboarding-column">
              <div className="column  ">
                <img src={registration} alt="Registration"></img>
                <h3 className="confirm-heading">Registration</h3>

                <p>
                  Share your personal details and that’s it! We will revert back
                  to you within 1 week.
                </p>
              </div>

              <div className="column  ">
                <img src={verify} alt="Verification"></img>
                <h3 className="confirm-heading">Verification</h3>

                <p>
                  We will verify your professional details through a telephonic
                  call or in-person meeting.
                </p>
              </div>

              <div className="column">
                <img src={confirmation} alt="Confirmation"></img>
                <h3 className="confirm-heading">Confirmation</h3>

                <p>
                  Our system confirms your application and you become our
                  trusted partner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
  };
};

export default connect(mapStateToProps)(Aboutus);

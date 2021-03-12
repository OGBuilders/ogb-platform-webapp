import React from "react";

import "./confirm.css";

import registration from "../../../components/utils/svg/registration.svg";
import verify from "../../../components/utils/svg/verify.svg";
import confirmation from "../../../components/utils/svg/confirm.svg";

const confirm = () => {
  return (
    <div>
      <div className="greenCircleSmall"></div>
      <div className="confirm">
        <div className="main-header">
          Your application has been <span className="green">registered.</span>
          <br></br> A representative from OGB will contact you within a week for verification.
        </div>
        <div className="columns confirm-columns is-8">
          <div className="column confirm-column ">
            <img src={registration} alt="Registration"></img>
            <h3 className="confirm-heading">Registration</h3>
            <div className="confirm-text">
              <p>Share your personal details and that’s it! We will revert back to you within 1 week.</p>
            </div>
          </div>

          <div className="column confirm-column ">
            <img src={verify} alt="Verification"></img>
            <h3 className="confirm-heading">Verification</h3>
            <div className="confirm-text">
              <p>We will verify your professional details through a telephonic call or in-person meeting.</p>
            </div>
          </div>

          <div className="column confirm-column ">
            <img src={confirmation} alt="Confirmation"></img>
            <h3 className="confirm-heading">Confirmation</h3>
            <div className="confirm-text">
              <p>Our system confirms your application and you become our trusted partner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default confirm;

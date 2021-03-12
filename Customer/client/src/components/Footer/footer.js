import React from "react";

import "./footer.css";

const footer = () => {
  return (
    <div className="footer">
      <div className="columns footer-columns">
        <div className="column footer-column ">
          <h3 className="footer-heading">One Grade Builders</h3>
          <br></br>
          <div className="text">
            <p>
              126-27-28, Okay Plus Spaces<br></br>
              Near Apex Circle, Malviya Industrial Area,<br></br>
              Jaipur (RJ), India - 302017
            </p>
          </div>
          <br></br>
          <p className="copyright">Copyright © 2020 OGB</p>
        </div>

        <div className="column footer-column">
          <h3 className="footer-heading">Need help? Contact us</h3>
          <br></br>
          <div className="text">
            <span className="icon">
              <i className="fas fa-phone"></i>
            </span>{" "}
            <a href="tel://+91 80056 14503">+91 80056 14503</a>
            <br></br>
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>{" "}
            info@ogbuilders.in
          </div>
        </div>

        <div className="column footer-column">
          <h3 className="footer-heading">Contact</h3>
          <br></br>
          <div className="text">
            <span className="icon">
              <i className="fab fa-facebook-square icons"></i>
            </span>
            <span className="icon">
              {" "}
              <i className="fab fa-instagram icons"></i>
            </span>
            <span className="icon">
              {" "}
              <i className="fab fa-twitter icons"></i>
            </span>
            <div className="privacy-terms">
              <p>Privacy Policy</p> <p> Terms of Use</p>
            </div>
          </div>
        </div>
      </div>
      <div className="greenFooterCicle"></div>
    </div>
  );
};

export default footer;

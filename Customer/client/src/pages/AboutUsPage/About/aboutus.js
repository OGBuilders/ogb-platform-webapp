import React from "react";

import aboutUsSvg from "../../../components/utils/svg/about_us.svg";

import whyUs_2 from "../../../components/utils/svg/whyUs_2.svg";
import whyUs_4 from "../../../components/utils/svg/whyUs_4.svg";

import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="about">
      <div className="greenCircleSmall"></div>
      <div className="columns intro">
        <div className="column is-two-thirds">
          <div className="heading1">Who we are?</div>
          <br></br>
          <div className="content1">
            Civil construction in India accounts for over 6 lakh crores yet has
            been most reluctant to adopt the global age of technology. We
            believe the sector which accounts for 5% of the nation’s GDP is long
            due a digital revolution which addresses issues important to the end
            customer such as trust, standardization, quality, longevity and
            sustainability. Customer reviews and surveys consistently point at
            many unaddressed issues such as poor design failures, improper
            estimation methods, miscommunication with service providers and lack
            of oversight.
            <br></br>
            <br></br>
            One Grade Builders addresses these issues by building relationships
            with customers, providing them a reliable, authentic and trustworthy
            experience in civil construction. We want customers of this labour
            intensive industry to have a hassle free experience through our
            technology and process transparency.
          </div>
          <br></br>
          <div className="greenLine"></div>
        </div>
        <div className="column about-illustration">
          <img src={aboutUsSvg} alt="About Us illustration"></img>
        </div>
      </div>

      {/* <div className="advisory">
        <div className="heading2">Advisory Board</div>

        <div className="columns board-members">
          <div className="column board-image">
            <img src={whyUs_2} alt="Why Us"></img>
          </div>
          <div className="column is-three-quarters advisory_content">
            <div className="content2">
              <span className="bold">John Doe</span> <br></br>
              <span className="position">Position</span>
              <br></br>
              <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
              <br></br>
              <br></br>
              <span className="quote">“I had a vision, and I believed in making it happen.”</span>
            </div>
          </div>
        </div>

        <div className="columns board-members">
          <div className="column board-image">
            <img src={whyUs_4} alt="Why Us"></img>
          </div>
          <div className="column is-three-quarters advisory_content">
            <div className="content2">
              <span className="bold">John Doe</span> <br></br>
              <span className="position">Position</span>
              <br></br>
              <br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
              <br></br>
              <br></br>
              <span className="quote">“I had a vision, and I believed in making it happen.”</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Aboutus;

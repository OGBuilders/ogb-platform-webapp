import React from "react";

import Navbar from "../../components/Navbar/navbar";
import About from "./About/aboutus";
import Footer from "../../components/Footer/footer";

const aboutpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default aboutpage;

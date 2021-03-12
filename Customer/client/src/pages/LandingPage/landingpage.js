import React from "react";

import Navbar from "../../components/Navbar/navbar";
import Landing from "./Landing/landing";
import Footer from "../../components/Footer/footer";

const landingpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
};

export default landingpage;

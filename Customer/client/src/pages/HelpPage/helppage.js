import React from "react";

import Navbar from "../../components/Navbar/navbar";
import Help from "./Help/Help";
import Footer from "../../components/Footer/footer";

const helppage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Help></Help>
      <Footer></Footer>
    </div>
  );
};

export default helppage;

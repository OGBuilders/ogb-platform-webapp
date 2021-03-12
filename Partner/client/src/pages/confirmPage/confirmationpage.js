import React from "react";

import Navbar from "../../components/Navbar/navbar";
import Confirm from "./Confirmation/confirm";
import Footer from "../../components/Footer/footer";

const landingpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Confirm></Confirm>
      <Footer></Footer>
    </div>
  );
};

export default landingpage;

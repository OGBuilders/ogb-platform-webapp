import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/landingpage";
import HelpPage from "./pages/HelpPage/helppage";
import AboutPage from "./pages/AboutUsPage/aboutpage";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage}></Route>
          {/* <Route exact path="/confirm" component={ConfirmPage}></Route> */}
          <Route exact path="/help" component={HelpPage}></Route>
          <Route exact path="/about" component={AboutPage}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

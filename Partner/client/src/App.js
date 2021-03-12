import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { CookiesProvider, withCookies } from "react-cookie";

import ScrollToTop from "./components/utils/ScrollToTop";

import LandingPage from "./pages/landingPage/landingpage";
import ConfirmPage from "./pages/confirmPage/confirmationpage";
import HelpPage from "./pages/helpPage/helppage";
import LoginPage from "./pages/loginPage/loginpage";
import RegisterPage from "./pages/registerPage/registerpage";

import "./App.css";

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Router>
          <ScrollToTop></ScrollToTop>
          <div className="App">
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/confirm" component={ConfirmPage}></Route>
            <Route exact path="/help" component={HelpPage}></Route>

            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/register" component={RegisterPage}></Route>
          </div>
        </Router>
      </Provider>
    </CookiesProvider>
  );
}

export default withCookies(App);

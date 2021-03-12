import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./button.css";

class button extends Component {
  ButtonClick = (path) => {
    this.props.history.push(`/${path}`);
  };

  render() {
    return (
      <div>
        <button
          className="is-outlined custom-navbar-button"
          onClick={() => this.ButtonClick(this.props.path)}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default withRouter(button);

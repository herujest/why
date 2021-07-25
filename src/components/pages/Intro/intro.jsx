import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from "../../../assets/icons/wehelpyou-logo.png";

export default class Intro extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h3>Wehelpyou</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is unofficial mobile documentation for developer getting started
        </p>
        <Link to="/getting-started"> Click here to continue </Link>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to skip
        </a> */}
      </header>
    </div>
    );
  }
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import logo from "../../../assets/icons/wehelpyou-logo.png";


const Intro = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
       history.push("/home");
    }, 2000);
  }, []);

  return (
    <div className="App">
    <header className="App-header">
      <h3>Wehelpyou</h3>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        This is unofficial mobile documentation for developer getting started
      </p>
      <Link to="/home"> Click here to continue </Link>
    </header>
  </div>
  );
}
export default Intro;
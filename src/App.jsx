import "./App.css";
import Resume from "./components/Resume.jsx";
import Screen from "./components/Computer.jsx";
import NavbarMain from "./navbar.jsx";
import React from "react";
import "@fontsource/roboto/500.css";
//const info = require("./info.json");

function App() {
  return (
    <div className="App">
      <div hidden className="navbar-div">
        <NavbarMain />
      </div>
      <div className="computer-div">
        <Screen />
      </div>
      <br />
      <div className="main-div">

        <br />
      </div>
    </div>
  );
}
export default App;

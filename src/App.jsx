import "./App.css";
import Resume from "./components/Resume.jsx";
import NavbarMain from "./navbar.jsx";
import React from "react";
import "@fontsource/roboto/500.css";

function App() {
  return (
    <div className="App">
      <div className="navbar-div">
        <NavbarMain />
      </div>
      <br />
      <div className="main-div">
        <div className="resume-div">
          <Resume />
        </div>
        <br />
      </div>
    </div>
  );
}
export default App;

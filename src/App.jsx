import "./App.css";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
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
        <br />
        <Skills />
        <br />
        <div className="experience-div">
          <Experience />
        </div>
        <br />
        <Contact />
        <br />
      </div>
    </div>
  );
}
export default App;

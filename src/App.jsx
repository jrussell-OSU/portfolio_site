import "./App.css";
import Screen from "./components/Computer.jsx";
import React from "react";
//const info = require("./info.json");

function App() {
  return (
    <div className="App">
      <div className="computer-div">
        <Screen />
      </div>
    </div>
  );
}
export default App;

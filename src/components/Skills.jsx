import React from "react";
import Collapsible from "react-collapsible";
import { Button, ThemeProvider } from "@mui/material";
import buttonTheme from "./Themes.jsx";

const info = require("../info.json");

const Skills = () => {
  const skills = info.skills;
  return (
    <div className="skills-list">
      <Collapsible
        trigger={
          <ThemeProvider theme={buttonTheme}>
            <Button className="skills-button">Skills</Button>
          </ThemeProvider>
        }
        transitionTime={300}
      >
        <p></p>
        <ul className="skills">
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </Collapsible>
    </div>
  );
};

export default Skills;

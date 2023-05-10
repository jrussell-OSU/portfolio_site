import React from "react";
import Collapsible from "react-collapsible";
import { Button, ThemeProvider } from "@mui/material";
import buttonTheme from "./Themes.jsx";

const info = require("../info.json");

const Experience = () => {
  const currentExperience = info.currentExperience;
  return (
    <div className="experience-list">
      <Collapsible
        trigger={
          <ThemeProvider theme={buttonTheme}>
            <Button>Experience</Button>
          </ThemeProvider>
        }
        transitionTime={300}
      >
        {currentExperience.map((job) => {
          return (
            <div key={job.name} className="experience">
              <p></p>
              <h4>{job.name}</h4>
              <h4>{job.title}</h4>
              <h6>
                {job.startDate} - {job.endDate}
              </h6>
              <h6 style={{ "maxWidth": "300px" }}>{job?.description}</h6>
              <br />
            </div>
          );
        })}
      </Collapsible>
    </div>
  );
};

export default Experience;

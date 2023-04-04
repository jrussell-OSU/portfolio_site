import React from "react";
import Collapsible from "react-collapsible";
import { Button, ThemeProvider } from "@mui/material";
import buttonTheme from "./Themes.jsx";

const info = require("../info.json");

const Experience = () => {
  const currentExperience = info.currentExperience;
  const pastExperience = info.pastExperience;
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
            <div className="experience">
              <p></p>
              <h4>{job.name}</h4>
              <h4>{job.title}</h4>
              <h6>
                {job.startDate} - {job.endDate}
              </h6>
              <h6 style={{ "max-width": "300px" }}>{job?.description}</h6>
              <br />
            </div>
          );
        })}
        <Collapsible
          trigger={
            <ThemeProvider theme={buttonTheme}>
              <Button
                size="medium"
                sx={{
                  bgcolor: "#76adc5",
                }}
              >
                Prior Work History
              </Button>
            </ThemeProvider>
          }
          transitionTime={400}
        >
          {pastExperience.map((job) => {
            return (
              <div className="prior-experience">
                <p></p>
                <h6>{job.name}</h6>
                <h6>{job.title}</h6>
                <h6>
                  {job.startDate} - {job.endDate}
                </h6>
                <h6 style={{ "max-width": "300px" }}>{job?.description}</h6>
                <br />
              </div>
            );
          })}
        </Collapsible>
      </Collapsible>
    </div>
  );
};

export default Experience;

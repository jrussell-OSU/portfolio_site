import React from "react";
import { Page, Document } from "react-pdf/dist/esm/entry.webpack5";
import Collapsible from "react-collapsible";
import { Button, ThemeProvider, Dialog } from "@mui/material";
import buttonTheme from "./Themes.jsx";
import resume from '../resume.pdf'

const Resume = () => {

  return (
    <div className="download-button-div">
      <a href={require("../resume.pdf")} download="resume">
        <ThemeProvider theme={buttonTheme}>
          <Button
            size="large"
            color="primary"
            className="button-primary"
          >
            Download Resume
          </Button>
        </ThemeProvider>
        </a>
    </div>
  )
}

export default Resume;

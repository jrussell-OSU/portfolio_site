import React from "react";
import { Page, Document } from "react-pdf/dist/esm/entry.webpack5";
import Collapsible from "react-collapsible";
import { Button, ThemeProvider, Tooltip } from "@mui/material";
import buttonTheme from "./Themes.jsx";
import resume from '../resume.pdf'

const Resume = () => {

  return (
    <div className="resume-button-div">
      <Collapsible
        trigger={
          <ThemeProvider theme={buttonTheme}>
            <Button className="button-main">View Resume</Button>
          </ThemeProvider>
        }
        transitionTime={300}
      >
        <div className="download-button-div">
          <a href={require("../resume.pdf")} download="resume">
            <ThemeProvider theme={buttonTheme}>
              <Button
                size="medium"
                color="secondary"
                className="button-secondary"
              >
                Download
              </Button>
            </ThemeProvider>
          </a>
        </div>
        <div className="resume-doc">
          <Document file={resume} onLoadError={console.error}>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </Collapsible>
    </div>
  );
};

export default Resume;

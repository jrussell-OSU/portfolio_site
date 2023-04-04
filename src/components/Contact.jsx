import React from "react";
import Collapsible from "react-collapsible";
import { Button, ThemeProvider } from "@mui/material";
import buttonTheme from "./Themes.jsx";
const info = require("../info.json");

const Contact = () => {
  const contact = info.contact;
  return (
    <div className="contact-list">
      <Collapsible
        trigger={
          <ThemeProvider theme={buttonTheme}>
            <Button>Contact Info</Button>
          </ThemeProvider>
        }
        transitionTime={200}
      >
        <p></p>
        <ul className="contact">
          {contact.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </Collapsible>
    </div>
  );
};

export default Contact;

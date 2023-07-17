import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import '../App.css';
import LinksMain from './LinksMain';
// import { FC } from 'react'
import {
  createTheme,
  ThemeProvider,
  Box,
} from '@mui/material'
// import styled from '@emotion/styled'
import { green, purple } from '@mui/material/colors'

const info = require("../info.json");
const resume = require("../resume.pdf");

const theme = createTheme({
  palette: {
    background: {
      paper: purple[500],
    },
    primary: {
      main: green[500],
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
})

const Computer = () => {
  const [visibility, setVisibility] = useState("hidden");

  return (
    <div className="Computer">
      <div className="screen-div">
        <div className="typewriter-div">
          <Typewriter
            options={{
              delay: 30,
              cursor: String.fromCharCode(0x2588), // "█"
            }}
            //Typing effect for intro and relevant links
            onInit={(typewriter) => {
              typewriter
                .typeString(info.intro)
                .typeString("<br /><br />")
                .typeString(
                  `<a href=${resume} download="resume">Resume</a><br />`
                )
                .typeString(
                  `<a href=${info.links.github}>GitHub</a><br />`
                )
                .typeString(
                  `<a href=${info.links.linkedIn}>LinkedIn</a><br />`
                )
                .typeString(
                  `<a href=${info.links.gameOfLife}>Game of life</a><br />`
                )
                .start();
            }}
          />
        </div>
        <LinksMain visibility={visibility} />
      </div>
    </div>
  );
};

export default Computer;

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
import ComputerImage from './computer.png'

const info = require("../info.json");

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
      <ThemeProvider theme={theme}>
        <Box
          className="Computer"
          sx={{
            width: 468,
            height: 505,
            backgroundImage: `url(${ComputerImage})`,
          }}
        >
          <div className="screen-div">
            <div className="intro-div">
              <Typewriter
                options={{
                  delay: 30,
                  cursor: String.fromCharCode(0x2588), // █ character
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(info.intro)
                    .callFunction(() => {
                      const cursor =
                        document.getElementsByClassName(
                          "Typewriter__cursor"
                        )[0];
                        cursor.style = "opacity:0";
                        setTimeout(() => setVisibility("visible"), 500);
                    })
                    .start();
                }}
              />
            </div>
            <LinksMain visibility={visibility} />
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Computer;

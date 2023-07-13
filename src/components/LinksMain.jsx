import React from 'react';
import '../App.css';

const info = require("../info.json");

const LinksMain = (props) => {

  return (
    <div
      className="links-main"
      style={
        {
          visibility: props.visibility
        }
      }
    >
      <a
        className="screen-link"
        href={require("../resume.pdf")}
        download="resume"
      >
        Download my resume
        <span className="cursor">{String.fromCharCode(0x2588)}</span>
      </a>
      <br />
      <a className="screen-link" href={info.links.gameOfLife}>
        Game of life
        <span className="cursor">{String.fromCharCode(0x2588)}</span>
      </a>
    </div>
  );
};

export default LinksMain;
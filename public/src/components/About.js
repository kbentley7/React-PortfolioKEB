import React from 'react';
import me from ''

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <br></br>
      <div id="me-photo-contain">
      <img src={me} alt="Me." id="photo-of-me"/>
      </div>
      <br></br> <br></br>
      <p id="about-me-text" className="central-content">
      I am 
      </p>
    </div>
  );
}
import React, { useState } from 'react';
import Nav from './Nav';
import About from "./About-me";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


// import "../styles/portfolio.css";


export default function Display() {

    const [currentPage, setCurrentPage] = useState("About")

    const renderContent = () => {
        switch (currentPage) {
          case "About":
            return <About />
            break;
          case "Portfolio":
            return <Portfolio />
            break; 
          case "Contact":
            return <Contact />
            break;
          default:
            return <About />
        }
    
      }

  return (
    <div className="new-container">
      <div className="new-nav">
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
        <br></br>
      <div className="new-content">
        {renderContent()}
        </div>
        <br></br><br></br>
        <footer>
        <ul className="contact-lis">
          <li>
          <a className="contact-links" href="https://stackoverflow.com/users/16735383/user16735383?tab=profile" target="blank_" tabIndex="0">
                    Stack Overflow
                </a>
          </li>
          <li>
          <a className="contact-links" href="https://github.com/kbentley7" target="blank_" tabIndex="0">
                    Github
                </a>
          </li>
          <li>
          <a className="contact-links" href="https://www.linkedin.com/in/kenneth-e-bentley-sr-3340369a/" target="blank_" tabIndex="0">
                    Linkedin
                </a>
          </li>
      </ul>
          
          <h3 id="foot-text">Kenneth E. Bentley, Sr.</h3></footer>
    </div>
  );
}
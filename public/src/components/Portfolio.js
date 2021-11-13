import React from 'react';
import deck from '';
import employee from '';
import password from '';
import cupboard from '';
import readme from '';
import note from '';


export default function Portfolio() {
    return (
      <div>
        <h1>Portfolio</h1>
        <div id="apps" className="central-content">
                <a href="https://github.com/kbentley7/Decked-Out" id="app1" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={deck} alt="Decked-Out" className="app-imgs" tabIndex="0" /> 
                    <p className="app-title">
                        Decked-Out
                    </p>
                </a>
                <a href="https://github.com/kbentley7/SQL-Employee-Trackerkb" id="app2" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={employee} alt="SQL Employee Tracker" className="app-imgs" tabIndex="0" /> 
                    <p className="app-title">
                        SQL Employee Tracker
                    </p>
                </a>
                <a href="https://github.com/kbentley7/passwordhomework" id="app3" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={password} alt="Password Generator webpage" className="app-imgs" tabIndex="0" /> 
                    <p className="app-title">
                        Password Generator
                    </p>
                </a>
                <a href="https://github.com/kbentley7/got-you-cupboard" id="app4" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={cupboard} alt="Got You Cupboard" className="app-imgs" tabIndex="0" />
                    <p className="app-title">
                        Got You Cupboard
                    </p>
                </a>
                <a href="https://github.com/kbentley7/Readme-Generatorkb" id="app5" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={readme} alt="Readme Generator" className="app-imgs" tabIndex="0" />
                    <p className="app-title">
                        Reademe Generator
                    </p>
                </a>
                <a href="https://github.com/kbentley7/NoteTakerkb" id="app6" target="blank_" tabIndex="-1" className="portfolio-item">
                    <img src={note} alt="Code for an e-commerce back end" className="app-imgs" tabIndex="0" />
                    <p className="app-title">
                        Note Taker
                    </p>
                </a>
            </div>
      </div> 
    );
  }
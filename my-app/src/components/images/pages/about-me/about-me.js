import React from "react";
import mark from "../../../assets/myphoto"
import "./about-me.css"

export default function AboutMe() {

    return (
        <div className="container-fluid content-container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-8 col-sm-9 col-xs-12 justify-content-center">
                    <h1>About Me</h1>
                    <img alt="me" src={myphoto} className="myphoto" />
                </div>
                <div className="col-lg-8 col-md-12 d-flex align-items-center">
                    <p className="about-me-p">
                        Hello, my name is Kenneth E. Bentley, Sr. I have a background in education and now completing my certificate from UPenn Full Stack Web Developer Bootcamp. During the bootcamp I worked with JavaScript, CSS, HTML, JavaScript/Web APIs.
                        In addition, I worked with MongoDB, MYSQL, Express.js, Node.js, Mongoose just to name a few. I plan to continue learning as technology continues to evolve.

                    </p>
                </div>
            </div>
        </div>
    )
}
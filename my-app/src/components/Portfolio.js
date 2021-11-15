import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/about-me/about-me";
import ContactMe from "./pages/contact-me/contact-me";
import Portfolio from "./pages/portfolio/portfolio";
import Resume from "./pages/resume/resume";

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState("About Me");

    const renderPage = () => {
        if (currentPage === "About Me"){
            return <AboutMe />;
        } else if (currentPage === "Portfolio") {
            return <Portfolio />;
        } else if (currentPage === "Contact Me") {
            return <ContactMe />;
        } else if (currentPage === "Resume") {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="parent">
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <div className="container-fluid footer-container bg-secondary text-white">
                <div className="row d-flex justify-content-around">
                    <div className="col-4 text-center">
                    <a href="https://github.com/kbentley7" target="_blank" rel="noreferrer" className="a-footer" ><i className="fab fa-github"></i></a>
                    </div>
                    <div className="col-4 text-center">
                    <a href="kenmo8466@gmail.com" className="a-footer" ><i className="fas fa-envelope"></i></a>
                    </div>
                    <div className="col-4 text-center">
                        <a href="https://www.linkedin.com/in/kenneth-e-bentley-sr-3340369a/" target="_blank" rel="noreferrer" className="a-footer"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
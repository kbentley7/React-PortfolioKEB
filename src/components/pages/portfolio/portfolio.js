import React from "react";
import PortfolioCard from "./portfolioCard";
import "./portfolio.css"
import password from "./images/password.png";
import gotYouCupboard from "./images/cupboard.png";
import deckedOut from "./images/decked.png";
import note    from "./images/note.png";

export default function Portfolio() {

    const data = {
        projectOne: {
            name: "Got You Cupboard",
            image: gotYouCupboard,
            description: "This website allows you to search for recipes using just ingredients. You can also search for nearby grocery stores. This sites utilizes Edamam's and MapQuest's APIs. It was build using HTML, CSS, JavaScript, and Materialize.",
            githubLink: "https://github.com/kbentley7/got-you-cupboard",
            deployedLink: "https://jfisher37.github.io/got-you-cupboard/index.html"
        },
        projectTwo: {
            name: "Decked-Out",
            image: deckedOut,
            description: "Are you in school, college or maybe a boot camp course? Is studying something that causes you stress and makes you cringe just at the thought of making a stack of index cards. Well have no fear! DeckedOut is here to help! With our interactive platform you can create multiple study lessons and create all the note cards you could ever need all in one place! With our DeckedOut platform studying just because more exciting!",
            githubLink: "https://github.com/kbentley7/Decked-Out",
            deployedLink: "https://deckedout-penn.herokuapp.com/ "
        },
        projectThree: {
            name: "Note Taker",
            image: note,
            description: "Create a functional Note Taker",
            githubLink: "https://github.com/kbentley7/NoteTakerkb",
            deployedLink: "https://notetaker-keb.herokuapp.com/"
        },
        projectFour: {
        name: "Password Generator",
        image: password,
             description: "For this assignment the task I had to create a click button secure password with the criteria of choose a length of at least 8 characters and no more than 128 characters. Technologies Used: HTML5, CSS, JavaScript",
             githubLink: "https://github.com/kbentley7/passwordhomework",
           deployedLink: "https://kbentley7.github.io/passwordhomework/"
        },
          //projectFive: {
            //name: "",
            //image: "",
            //description: "",
            //githubLink: "",
            //deployedLink: ""
       // },
        // projectSix: {
        //     name: "",
        //     image: "",
        //     description: "",
        //     githubLink: "",
        //     deployedLink: ""
        // },
    }

    return (
        <section className="work row d-flex flex-column align-items-center" id="work">
            <div className="col-xl-9 col-md-11 row row-cols-lg-2 row-cols-md-2 mb-4 g-4">
                <PortfolioCard 
                    name={data.projectOne.name}
                    image={data.projectOne.image} 
                    description={data.projectOne.description} 
                    githubLink={data.projectOne.githubLink}
                    deployedLink={data.projectOne.deployedLink}
                />
                <PortfolioCard 
                    name={data.projectTwo.name}
                    image={data.projectTwo.image}
                    description={data.projectTwo.description}   
                    githubLink={data.projectTwo.githubLink}
                    deployedLink={data.projectTwo.deployedLink}
                />
                <PortfolioCard 
                    name={data.projectThree.name}
                    image={data.projectThree.image}
                    description={data.projectThree.description}   
                    githubLink={data.projectThree.githubLink}
                    deployedLink={data.projectThree.deployedLink}
                />
                <PortfolioCard 
                    name={data.projectFour.name}
                    image={data.projectFour.image} 
                    description={data.projectFour.description}  
                    githubLink={data.projectFour.githubLink}
                    deployedLink={data.projectFour.deployedLink}
                />
                {/* <PortfolioCard 
                    name={data.projectFive.name}
                    image={data.projectFive.image}
                    description={data.projectFive.description}   
                    githubLink={data.projectFive.githubLink}
                    deployedLink={data.projectFive.deployedLink}
                />
                <PortfolioCard 
                    name={data.projectSix.name}
                    image={data.projectSix.image} 
                    description={data.projectSix.description}  
                    githubLink={data.projectSix.githubLink}
                    deployedLink={data.projectSix.deployedLink}
                /> */}
            </div>
        </section>
    )
}
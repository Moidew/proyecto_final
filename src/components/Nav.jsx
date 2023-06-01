import React from "react";
import image1 from "../icons/Bio.png";
import image2 from "../icons/Poyecto.png";
import image3 from "../icons/contac.svg";
const Navbar = () => {
    

    return(
       <div className="nav-container">
        <div className="navbar">
            <a href="#biography" title="Bio">
            <img alt="bio use" src={image1} width= "40px"></img>
            </a>
            <a href="#projects" title="projects">
            <img alt="proyec use" src={image2} width= "40px"></img>
            </a>
            <a href="#contact" title="Contact Me">
            <img alt="contac use" src={image3} width= "40px"></img> 
                </a>
        </div>
       </div>
    )
}


export {Navbar}

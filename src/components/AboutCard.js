import React from "react";
import Profile from "../assets/Profile.jpg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div>

                    <p>I am creative and curious. My thirst to learn more and expand my skill set has motivated me to build up few projects.</p>

                     <p>  I am interested in  full stack developmnet and learning new skills</p>
               
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/alisha-panday-bbb940174/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/AlishaPanday/" className="card-link">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;



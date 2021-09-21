import React from "react";
import HomeProfile from "../assets/HomeProfile.jpg"

function HomeCard() {
    return (
        <div className="row row-home">
            <div className="col-4">

                <div className="card card-home">
                    <div className="card-body">
                        <img src={HomeProfile} alt="home-profile-photo" className="home-profile-photo mb-3"></img>
                        <h5 className="card-title text-center">Welcome to my Portfolio</h5>
                        <p className="card-text text-center">Passionate Full stack developer</p>
                        <a href="https://www.linkedin.com/in/alisha-panday-bbb940174/" className="ml-5">LinkedIn</a> 
                        <a href="https://github.com/AlishaPanday/" className="ml-5">Github</a>
                    </div>
                </div>

            </div>
        </div>



    );
}

export default HomeCard;

import React from "react";
import ContactPNG from "../assets/contact.png"


function ContactCard(props) {
    return (

        <div className="contact-card">

            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">
                    <a href="tel:+614223456" className="ml-4 mt-4 font-weight-bold">Phone</a>

                    <a href="mailto:panday.alisha90@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

                    <a href="https://www.linkedin.com/in/alisha-panday-bbb940174/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

                    <a href="https://github.com/AlishaPanday/" className="ml-4 mt-4 font-weight-bold">GitHub</a>

                    <img src={ContactPNG} alt="profile-photo" className="profile float-left"></img>
                </div>
            </div>
        </div >


    );
}

export default ContactCard;

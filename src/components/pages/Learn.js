import React from "react";
import ResumePNG from "../../assets/resume.png"



function Learn() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+614222456" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto:panday.alisha90@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/alisha-panday-bbb940174/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/AlishaPanday/" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="https://drive.google.com/file/d/1zWeyy6CjVWOQI1STDC22y7UIDESoorB2/view?usp=sharing"><h5 className="text-center mt-2">Click to View</h5></a>

        </div>
      </div>
    </div >
  );
}

export default Learn;

import React from 'react';
import resume from "../assets/images/Resume.png"

const Resume = props => {
    return (
        <div className="wrapper">

            <h3>Resume</h3>
            <hr/>
            <div class="resume-div">
                <img class="resume" src={resume} alt="Resume" />
                </div>
        </div>

    );
};

export default Resume
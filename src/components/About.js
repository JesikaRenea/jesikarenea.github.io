import React from 'react';
import ucfPendant from "../assets/images/ucfPendant.PNG"

const About = props => {
    return (
        <div className="wrapper">

            <h3>About</h3>
            <hr/>

            <div class="media">
                <img class="align-self-start mr-3" id="ucfPendant" src={ucfPendant} alt="UCF Logo" />
                <div class="media-body">
                    <p>
                        UCF graduate, with a Certificate in Full Stack Web Development and a B.S.B.A in Finance. I have designed, built, and maintained multiple WordPress and e-Commerce websites, have experience with Adobe Platforms: Illustrator, Photoshop, and InDesign, manage multiple Social Media Business Accounts, and am experienced in SEO and WordPress plug-in enhancements.
                  <br /><br />

                  My skills include HTML, CSS, Javascript, jQuery, AJAX, API's, Bootstrap/Materialize, Deployment Apps: GitHub/Heroku, node.js, express.js, MySQL/Sequelize, MongoDB/Mongoose, and React.JS. Detail-oriented and take pride in producing clean, organized code; along with strong attention to creative design and UI/UX.
                  <br /><br />

                  Consistent, hardworking, and highly motivated; strongly believe in teamwork, and enjoy working with others to solve problems, and achieve the utmost success.
                  <br /><br />

                  It is crucial to demonstrate the importance of my job, duties, and expectations. I am constantly looking to challenge myself for success, as well as to expand my knowledge and skills!
                    <br /><br />
                    </p>
                </div>
            </div>

        </div>

    );
};

export default About
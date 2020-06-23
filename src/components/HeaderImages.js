import React from 'react';
import reactLogo from "../../src/assets/images/react.PNG";
import mongoLogo from "../../src/assets/images/mongoDBSquare.PNG";
import nodeLogo2 from "../../src/assets/images/node2.PNG";
import nodeLogo1 from "../../src/assets/images/node.PNG";
import mySqlLogo from "../../src/assets/images/mySql.PNG";







const HeaderImages = props => {
    return (

        <div class="row image-row">
            <div class="image-container">
                <img class="header-image" src={reactLogo}></img>
                <br />
                <img class="header-image" src={mongoLogo}></img>
                {/* <img class="header-image" src={nodeLogo1}></img> */}
                <img class="header-image" src={nodeLogo2}></img>
                <img class="header-image" src={mySqlLogo}></img>

            </div>
        </div>

    );
};

export default HeaderImages
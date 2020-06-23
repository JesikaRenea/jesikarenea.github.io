/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import LocalWire from "../assets/images/LocalWire_Project7.png";

const Card = props => {
    return (
        <div class="index">

            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator"
                        src={props.image} />
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">...</i></span>
                    <p><a href={props.href}
                        target="_blank">View Project</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{props.title}<i
                        class="material-icons right">X</i></span>
                    <p>
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card
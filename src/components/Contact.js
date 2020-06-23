import React from 'react';

const Contact = props => {
    return (
        <div className="wrapper">
            
            <h3>Contact</h3>
            <hr/>


            <form>
                <div class="input-field col s12">
                    <input id="email" type="text" class="validate" />
                    <label for="email">Name</label>
                </div>

                <div class="input-field col s12">
                    <input id="email" type="email" class="validate" />
                    <label for="email">Email</label>
                </div>

                <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Message</label>
                </div>

                <button type="submit" class="btn">Submit</button>

            </form>
        </div>

    );
};

export default Contact
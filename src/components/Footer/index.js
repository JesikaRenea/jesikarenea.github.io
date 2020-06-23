/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import './styles.css'

const Footer = props => {
  return (
    <div>

      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12" align="left">
              <a href="https://www.facebook.com/OrlandoWebSolutions/" class="fa fa-facebook" target="_blank"></a>
              <a href="https://www.instagram.com/orlandowebsolutions/" class="fa fa-instagram" target="_blank"></a>
              <a href="https://www.linkedin.com/in/jessicahayesucf/" class="fa fa-linkedin" target="_blank"></a>
              <a href="https://github.com/jesikarenea" class="fa fa-github" target="_blank"></a>


            </div>
            <div class="col l4 offset-l2 s12" align="left">
              <ul align="left">
                <li><a class="grey-text text-lighten-3" href="https://www.jessicahayesdesign.com/" target="_blank" >Orlando Web Solutions</a></li>
                <li><a class="grey-text text-lighten-3" href="https://www.upwork.com/freelancers/~01e61d0fb35a209618" target="_blank">UpWork Profile</a></li>
                <li><a class="grey-text text-lighten-3" href="https://www.cheeky-swimwear.com/" target="_blank">Cheeky-Swimwear.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container footer">
            © 2020 Jessica Hayes
            </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer


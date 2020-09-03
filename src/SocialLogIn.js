import React, { Component } from 'react';
import App from './App.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

class SocialLogIn extends Component{
    render(){
        return(
            <div class="social-container">
                <h6 class="words">SignUp with your Social media platform</h6>
                <a 
                   className="facebook social">
                   <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a className="twitter social">
                   <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                   className="instagram social">
                   <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        )
    }
}

export default SocialLogIn;
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="social-container">
    
      <a
        target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/"       
        className="youtube social"        
      >
        <FontAwesomeIcon icon={faYoutube} size="3x" />
      </a>


      <a
        target="_blank" rel="noopener noreferrer" href="https://www.facebook.com"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>

      <a 
      target="_blank" rel="noopener noreferrer" href="https://www.twitter.com"
       className="twitter social">

        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>

      <a
         target="_blank" rel="noopener noreferrer" href="https://www.instagram.com"
        className="instagram social"
      >

        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      
      <p> Copyright &copy; 2020 Abdiel. Todos los derechos reservados </p>
    </div>
  );
}

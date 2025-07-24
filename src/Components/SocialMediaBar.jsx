import React from 'react';
import './SocialMediaBar.css';
 
const  SocialMediaBar= () => {
    return(
        <>

       
    <div className="social-container">
      <div className="main-icon">
        <i className="fa fa-share-alt"></i>
      </div>
      <div className="social-icons">
        <a href="/" className="facebook"><i className="fab fa-facebook" ></i></a>
        <a href="/" className="youtube"><i className="fab fa-youtube" ></i></a>
        <a href="/" className="linkedin"><i className="fab fa-linkedin" ></i></a>
        <a href="/" className="instagram"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  

        </>
    );
}

export default SocialMediaBar;
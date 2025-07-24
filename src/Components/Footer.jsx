import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (

    
    <div  >
    <footer className=" text-white py-4" style={{
          backgroundColor: 'rgba(0, 59, 110, 0.98)',}}>
      <div className="container-fluid" >
       
        
        <div className='container text-center'>
        <div className='row'>
          <div className='col-12 col'>
          <div id='footer-divider'>
        <img
          src="/images/footerlogo.png"
          alt="NUST Logo"
          className="img-fluid my-2"
          style={{ maxHeight: '70px' }}
        />
        </div>
        </div>
        </div>

        
        

      
        <div className="row text-center text-md-start align-items-center mt-3">
        
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <Link to='/' className="text-white text-decoration-none">Home</Link>
              <Link to='/' className="text-white text-decoration-none">Disclaimer</Link>
              <Link to='/' className="text-white text-decoration-none">Contact Us</Link>
            </div>
          </div>

          
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <small>© 2025 National University of Sciences and Technology. All Rights Reserved.</small>
          </div>

        
          <div className="col-md-4 text-center text-md-end">
            <span className="me-2">Follow Us</span>
            <Link to='/' className="btn btn-outline-light btn-sm rounded-0 me-1">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to='/' className="btn btn-outline-light btn-sm rounded-0 me-1">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to='/' className="btn btn-outline-light btn-sm rounded-0 me-1">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to='/' className="btn btn-outline-light btn-sm rounded-0">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
    </div>
    
  );
};

export default Footer;

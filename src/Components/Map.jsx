import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Map = () => {
  return (
    <div
      className="container-fluid py-2"
      style={{ backgroundColor: 'rgba(0, 59, 110, 0.98)', fontFamily: 'Tahoma' }}
    >
      <div className="container-fluid py-5">

        <div className='py-3'>
          <div className='row text-white'>
            <div className='col-md-3 d-flex align-items-center mb-3'>
              
              <img  src='https://nust.edu.pk/wp-content/themes/nust-main/assets/img/Career Development_icon.png' alt='career'
               style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
              <h5>Career Development</h5>
              </div>

              <div className='col-md-3 d-flex align-items-center mb-3'>
                 <img className='' src='https://nust.edu.pk/wp-content/themes/nust-main/assets/img/Placements_icon.png' alt='career'
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
              <h5>Placements</h5>
              </div>

              <div className='col-md-3 d-flex align-items-center mb-3'>
                 <img className='' src='https://nust.edu.pk/wp-content/themes/nust-main/assets/img/Career Counselling_icon.png' alt='career'
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
              <h5>Center for Counselling & Career Advisory</h5>
              </div>

              <div className='col-md-3 d-flex align-items-center mb-3'>
                 <img className='' src='https://nust.edu.pk/wp-content/themes/nust-main/assets/img/Professional Dev_icon.png' alt='career'
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
              <h5>Professional Development</h5>
              </div>

              <div className='col-md-3 d-flex align-items-center mb-3'>
                 <img className='' src='https://nust.edu.pk/wp-content/themes/nust-main/assets/img/Quality Assurance_icon.png' alt='career'
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
              <h5>Quality Assurance</h5>
              </div>

              <div className='col-md-3 d-flex align-items-center mb-3'>
                 <img className='' src='https://nust.edu.pk/wp-content/themes/nust-main/assets/img/NIPS_icon.png' alt='career'
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
              <h5>NUST Institute of Policy Studies</h5>
              </div>

              <div className='col-md-3 d-flex align-items-center mb-3'>
                 <img className='' src='https://nust.edu.pk/wp-content/themes/nust-main/assets/img/Students Affair_icon.png' alt='career'
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
              <h5>Student Affairs</h5>
              </div>

               <div className='col-md-3 d-flex align-items-center mb-3'>
                 <img className='' src='https://nust.edu.pk/wp-content/themes/nust-main/assets/img/Industry linkages_icon.png' alt='career'
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}/>
              <h5>Industry Academia Linkages</h5>
              </div>
            </div>


          </div>

        </div>
      
       <div className='container text-center'>
        <div className='row'>
          <div className='col-12 col'>
          
          <div id='section-divider'
          style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '30px 0',
  }}
>
  {/* Left Line */}
  <div
    style={{
      flex: 1,
      height: '2px',
      backgroundColor: 'white',
      marginRight: '20px',
    }}
  ></div>
          

            
       <h4 className=" heading-box text-center fw-bold text-white mb-0 text-outline py-3"
        style={{ 
        display: 'inline-block',      
        border: '2px solid white',   
        padding: '2px 8px',          
        borderradius: '2px',        
        backgroundColor: 'transparent', 
        color: 'white', 
       }}
       >
        IMPORTANT LINKS</h4>
        
        <div
            style={{
             flex: 1,
             height: '2px',
             backgroundColor: 'white',
            marginLeft: '10px',
            }}
        ></div>

        </div>
        </div>
        </div>
        </div>
      
      
      <div className="row mx-4 px-3 mt-2">
        <div className="col-md-3  my-3">
          <h4 className="text-white fw-bold">In Focus</h4>
          <div class='text-white small py-3'>
          <Link to='/'> NUST at a Glance</Link><br/>
          <Link to='/'> Academic Calender</Link><br/>
          <Link to='/'> Academic Schedule</Link><br/>
          <Link to='/'> Student Helplines</Link><br/>
          <Link to='/'> Facilities at NUST</Link><br/>
          <Link to='/'> Contact Us</Link><br/>
          <Link to='/'> Trademark Notice</Link><br/>
          <Link to='/'> Offices and Resources</Link><br/>
          <Link to='/'> Marketing and Guidelines</Link><br/>
          <Link to='/'> World Political Map</Link>
          </div>
        </div>
        <div className="col-md-3  my-3">
          <h4 className="text-white fw-bold">Quick Links</h4>
          <div class='text-white  small py-3'>
          <Link to='/'>  Innovation & Commercialisation</Link><br/>
          <Link to='/'>Library </Link><br/>
          <Link to='/'>Downloads </Link><br/>
          <Link to='/'> Defaulter's list</Link><br/>
          <Link to='/'>  Grievances Review Committee</Link><br/>
          <Link to='/'>  Tender Information</Link><br/>
          <Link to='/'>Feedback </Link><br/>
          <Link to='/'>  NUST Anti-Harassment Helpline</Link><br/>
          <Link to='/'> Online Degree/Transcript Verification</Link><br/>
          <Link to='/'> Career Development Centre</Link>
          </div>
         

        </div>
        <div className="col-md-3  my-3">
          <div className="text-white">
          <h4 className='fw-bold'>NUST UAN</h4>
          <div className='py-3 small'>
          <Link to='/'><i className='fas fa-phone text-white'></i> +92-51-111-11-6878</Link>
          </div>
          </div>
          <div className='text-white'>
          <h4 className="my-2">ADDRESS</h4>
          <p>National University of Sciences & Technology (NUST) Campus, Sector H-12, Islamabad, Pakistan</p>
        </div>
        </div>

        <div className="col-md-3">
          <h4 className="text-white py-3 fw-bold">Location Map</h4>
          <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13285.883615505472!2d72.98108125472874!3d33.64495830600344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9675aaaaaaab%3A0xc5180922c44eb86b!2sNUST!5e0!3m2!1sen!2s!4v1603863909279!5m2!1sen!2s"
    width="100%"
    height="150"
    style={{ border: '0', width: '266px', height: '300px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Location Map"
  ></iframe>
        </div>
      </div>
    </div>
    
    
  );
};

export default Map;

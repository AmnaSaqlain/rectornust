import React from 'react';
import './Profile.css';
const Profile = () => {
  return (
    <section>
    <div className="container-fluid" id='profile'>
      <div className="row">
       
        <div
          className="col-md-6 text-dark p-1"
          style={{
            backgroundImage: "url('/images/profile-bg.jfif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "black",
            position: "relative",
            minHeight: "100vh"
          }}
        >
          <div className='h-100'
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.75)",
              padding: "50px",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            <h4 className="fw-semibold ">PROFILE</h4>
            <p>
              Dr Muhammad Zahid Latif HI(M) is a unique blend of an academician and a practitioner. 
              His educational credentials include four Master’s degrees, an MPhil with the Chancellor’s Gold Medal, and a Doctorate from Peking University, Beijing, China.
              He is also a retired three-star general and former Federal Secretary (Defence Production) with hands-on experience in cutting-edge technologies and domestic as well as international defence industries. Dr Zahid has taught postgraduate and doctoral courses in Pakistani universities and China. He also holds the honour of delivering lectures at the universities and think tanks across USA, UK, and China.


             
            </p>
            <div className="text-end mt-3">
            <p className="fw-bold mb-0">
              View Detail
              </p>
              </div>
          </div>
        </div>

       
        <div className="col-md-6 bg-light fs-6">
          
          <h4 className="fw-bold pt-5 mx-2">MESSAGE</h4>
          <div className="text-warning fs-1 mb-2">
            <i className="fas fa-quote-left"></i>
          </div>
          <p className="fw-semibold" 
           style={{
              
              padding: "30px",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
          >
            Allah has bestowed this great honour upon me to lead NUST as its Rector. 
            As we embrace the future with a shared vision, our primary focus shall remain on equipping the next generation with world-class knowledge. 
            Simultaneously, we shall emphasise internationalisation, interdisciplinary collaboration and foster cutting-edge research and innovation that align with national growth and collective progress.

            
          </p>
          <div className="text-end text-warning fs-1">
            <i className="fas fa-quote-right"></i>
          </div>
          
          <div className="text-end mt-3">
          <p className="fw-bold mx-3">View Detail</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Profile;

import React from 'react';

import News from '../Components/News';

import Vision from '../Components/Vision';
import Profile from '../Components/Profile';
import Banner from '../Components/Banner';


function HomePage() {
 
  return (
    <>
     
     <div 
      style={{
          position: "fixed",
          top:0, 
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          zIndex: 1,
          
        }}>
      <Banner/>
      </div>

      <div 
      style={{
          position: "relative",
          zIndex: 2,
          marginTop: "100vh", 
          backgroundColor: "white", 
          
        }}
      >
     <Profile/>
     <Vision/>
     <News/>
     
     </div>
     

    </>
  );
}

export default HomePage;
import React from 'react';

import News from '../Components/News';

import Vision from '../Components/Vision';
import Profile from '../Components/Profile';
import Banner from '../Components/Banner';


function HomePage() {
  const headerHeight = 50;
  return (
    <>
     
     <div 
      style={{
          position: "fixed",
          top: `${headerHeight}px`,
          left: 0,
          width: "100%",
          height: `calc(100vh - ${headerHeight}px)`,
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
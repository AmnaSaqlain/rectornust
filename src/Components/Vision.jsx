import React from 'react';
import { useNavigate } from 'react-router-dom';

const Vision = () => {
  const navigate = useNavigate();
  return (

    <>
    <div class='container-fluid bg-white'>
         <h2 className="fw-bold text-center mb-4 my-3">STRATEGIC VISION</h2>
    </div>
    <section
      className="text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: "url('/images/vision-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      
      <div
        className="p-5"
        style={{
          backgroundColor: 'rgba(0, 59, 110, 0.8)',
          maxWidth: '1000px',
          borderRadius: '5px',
        }}
      >
        <h5 className="fw-bold mb-3">Vision</h5>
        <p>
          NUST aspires to be a comprehensive university providing a higher education experience
          grounded in thought leadership, co-creation of knowledge, and sustainability.
        </p>

        <h5 className="fw-bold mt-4 mb-3">Mission</h5>
        <p>
          NUST is committed to being a university that stimulates intellectual curiosity,
          behavioral progression, and environmental stewardship. We nurture future leaders,
          job creators, and lifelong learners, with the ability to foster partnerships,
          and intercultural competence to impact their communities and beyond. Through
          adherence to our core values, we create an ecosystem that promotes research,
          innovation, and productivity.
        </p>
      </div>

      <button className="btn btn-warning fw-bold mt-4 px-4 py-2 rounded-pill" onClick={() =>{ navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }}>
        STRATEGIC THRUSTS
      </button>
    </section>
    </>
  );
};

export default Vision;

import React from 'react'; 
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <>
      <section className="container-fluid pt-4 overflow-hidden ">
        <p> 
          <Link to='/' className="text-secondary px-3"><i className="fa fa-home"></i></Link>
          <span className='mx-3 text-muted'><i className="fa fa-chevron-right"></i></span>
          <span className='mx-3 text-muted'> News</span>
        </p>

        <hr />

        <div className="row g-2">
         
          <div className="col-md-7">
            <div className="card border-0 position-relative bg-light" style={{ height: '400px' }}>
              <img 
                src="/images/news1.png" 
                alt="Legacy" 
                className="img-fluid h-100 w-100 object-fit-cover" 
              />
              <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-10 text-white p-3">
                <Link to='/' className="fw-bold text-white text-decoration-none" style={{color: 'rgba(23, 76, 130, 0.8)', fontSize: '24px'}}>
                  Event <br /> *NUST strengthens ties with Nankai University, China*
                </Link>
              </div>
            </div>
          </div>

          
          <div className="col-md-5">
            <div className="row g-3">
              
              <div className="col-12 col">
                <div className="card border-0 position-relative">
                  <img
                    src="/images/event2.png"
                    className="card-img-top"
                    alt="Legacy 2"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-10 text-white p-3">
                    <Link to='/' className="fw-bold fs-4 text-white text-decoration-none" style={{color: 'rgba(23, 76, 130, 0.8)', fontSize: '14px'}}>
                      Event <br /> Rector NUST Visits College of EME
                    </Link>
                  </div>
                </div>
              </div>

             
              <div className="col-6">
                <div className="card  position-relative">
                  <img
                    src="/images/event3.png"
                    className="card-img-top"
                    alt="event 3"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-50 text-white p-2">
                    <Link to='/' className="fw-bold fs-6 text-white text-decoration-none" style={{color: 'rgba(23, 76, 130, 0.8)', fontSize: '14px'}}>
                      Sustainability in Action: NUST Community Unites for Tree plantation
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="card position-relative">
                  <img
                    src="/images/event4.png"
                    className="card-img-top  "
                    alt="event 4"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-50 text-white p-3">
                    <Link  to='/'className="fw-bold fs-6 text-white text-decoration-none" style={{color: 'rgba(0, 59, 110, 0.98)'}}>
                      Events<br />
                      Rector NUST at the signing of the SCO University Alliance for Digital Economy education
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;

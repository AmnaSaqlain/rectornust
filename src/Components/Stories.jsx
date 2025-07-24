import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Stories = () => {
    const navigate = useNavigate();
    return( 
        
       <section className="container my-5">
      <h2 className="fw-bold text-center mb-4">NEWS & EVENTS</h2>

      <div className="row">
        <div className='col-md-3'>
                    <div className="card h-100 shadow-sm border-0">
              <img
                src="/images/event4.png" alt="story1"
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h6 className="text-primary mb-0">
                  <Link to='/eventdetails' className="text-decoration-none"  style={{ color: 'rgba(0, 59, 110, 0.8)'}}>
                     Rector NUST at the signing of the SCO University Alliance for Digital Economy education
                  </Link></h6>
                  <p>July 11, 2025</p>
                  <div className="d-flex justify-content-center gap-2">
              <button type="button" className="btn btn-warning text-dark btn-sm"  onClick={() => navigate('/Eventbtnpage')}>EVENT</button>
              <button type="button" className="btn btn-warning text-dark btn-sm"  onClick={() => navigate('/Eventsbtnpage')}>EVENTS</button>
            </div>
                
              </div>
            </div>
          </div>
          </div>

          <div className='d-flex justify-content-center my-3'>
            <button type='button' className='btn btn-warning text-dark btn-md' onClick={() => navigate('/MoreStoriesPage')}>More Stories</button>
          </div>
    </section>
      
        
    );
}

export default Stories;
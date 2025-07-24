import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Eventsbtn = () => {

   const storyData = [
    {
      img: '/images/event4.png',
      title: 'Rector NUST at the signing of the SCO University Alliance for Digital Economy education',
      date: 'July 11, 2025',
    },
    {
      img: '/images/news5.png',
      title: 'NUST Advances Medical Policy Reforms to Support Employee Welfare',
      date: 'May 29, 2025',
    },
    {
      img: '/images/events3.png',
      title: 'Chinese Ambassador visits NUST',
      date: 'May 27, 2025',
    },
   
  ];
 
  const navigate = useNavigate();
return(
<section className="container pt-4 overflow-hidden px-3">
        <p> 
          <Link to='/' className="text-secondary px-3"><i className="fa fa-home"></i></Link>
          <span className='mx-3 text-muted'><i className="fa fa-chevron-right"></i></span>
          <span className='mx-3'> News</span>
          <span className='mx-3 text-muted'><i className="fa fa-chevron-right"></i></span>
          <span className='mx-3'> Events</span>
        </p>
        <h3 className='text-dark fs-3 fw-bold'> News Category: Events</h3>

        <div className="row">
        {storyData.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.img}
                alt={`story-${index}`}
                className="card-img-top "
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h6 className="text-primary mb-0">
                  <Link to='/eventdetails' className="text-decoration-none" style={{ color: 'rgba(0, 59, 110, 0.98)'}}>
                    {item.title}
                  </Link>
                </h6>
                <p>{item.date}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button type="button" className="btn btn-warning text-dark btn-sm"  onClick={() => navigate('/Eventbtnpage')}>EVENT</button>
                  <button type="button" className="btn btn-warning text-dark btn-sm"  onClick={() => navigate('/Eventsbtnpage')}>EVENTS</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


        </section>
        

);
    }

export default Eventsbtn;
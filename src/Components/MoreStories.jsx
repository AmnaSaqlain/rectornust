import  React from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MoreStories = () => {
  const navigate = useNavigate();
   const storyData = [
    {
      img: '/images/event4.png',
      title: 'Rector NUST at the signing of the SCO University Alliance for Digital Economy education',
      date: 'July 11, 2025',
    },
    {
      img: '/images/story2.jpg',
      title: 'Rector NUST Leads Eid-ul-Fitr Celebrations on Campus',
      date: 'April 01, 2025',
    },
    {
      img: '/images/story3.jpg',
      title: 'Rector NUST Dr Muhammad Zahid Latif visits the Projects Secretariat',
      date: 'March 29, 2025',
    },
    {
      img: '/images/story2.jpg',
      title: 'Rector NUST Leads Eid-ul-Fitr Celebrations on Campus',
      date: 'April 01, 2025',
    },
    {
      img: '/images/story3.jpg',
      title: 'Rector NUST Dr Muhammad Zahid Latif visits the Projects Secretariat',
      date: 'March 29, 2025',
    },
    {
      img: '/images/story6.jpg',
      title: 'Rector’s Visit to NCLSC',
      date: 'March 26, 2025',
    },
    {
      img: '/images/story7.jpeg',
      title: 'Rector NUST joins hostellites for Sehri',
      date: 'March 25, 2025',
    },
    {
      img: '/images/story8.png',
      title: 'Rector NUST Visits the Marketing & Communications Office',
      date: 'March 20, 2025',
    }
  ];

  

return(
<section className="container pt-4 overflow-hidden px-3">
        
        <div className='text-center'>
        <h1 className='text-dark  fw-bold py-4'> More Stories</h1>
        </div>

        <div className="row">
        {storyData.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.img}
                alt={`story-${index}`}
                className="card-img-top  hover-zoom"
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
                  <button type="button" className="btn btn-warning text-dark btn-sm"  onClick={() => navigate('/RectorVisitPage')}>RECTOR'S VISITS</button>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


        </section>
        

);
    }

export default MoreStories;
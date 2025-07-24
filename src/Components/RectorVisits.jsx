import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RectorVisits = () => {
  const navigate = useNavigate();

  const rectorData = [
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
         img: '/images/rector2.jpeg',
         title: 'Rector’s Orientation Visit to C3A',
         date: 'March 10, 2025',
       },
       {
         img: '/images/rector1.jpg',
         title: 'Rector NUST Inaugurates Career Connect ’25, Linking 2500 Students with 120+ Employers',
         date: 'February 26, 2025',
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
         img: '/images/event1.jpeg',
         title: 'Rector NUST Visits QA & NIO',
         date: 'March 19, 2025',
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
       },
       {
         img: '/images/rector3.jpg',
         title: 'Rector’s Visit to Finance & Audit Dtes',
         date: 'March 05, 2025',
       }
     ];
  return (
    <>
  
      <section className="container pt-4 overflow-hidden px-3">
           
          <p> 
                    <Link to='/' className="text-secondary px-3"><i className="fa fa-home"></i></Link>
                    <span className='mx-3 text-muted'><i className="fa fa-chevron-right"></i></span>
                    <span className='mx-3'> News</span>
                    <span className='mx-3 text-muted'><i className="fa fa-chevron-right"></i></span>
                    <span className='mx-3'> Rector's Visits</span>
                  </p>

          
           <h1 className='text-dark  fw-bold py-4'> New Category: Rector's Visits</h1>
          
   
           <div className="row">
           {rectorData.map((item, index) => (
             <div className="col-md-3 mb-4" key={index}>
               <div className="card h-100 shadow-sm border-0">
                 <img
                   src={item.img}
                   alt={`rector-${index}`}
                   className="card-img-top "
                   style={{ height: '200px', objectFit: 'cover' }}
                 />
                 <div className="card-body">
                   <h6 className="text-primary mb-0">
                     <Link to='/eventdetails' className="text-decoration-none">
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
           
   
  

    </>
  );
}

export default RectorVisits;
import React from 'react';


const EmployeeContact = () => {
    const employeedata = [

          { 
            h1: 'Director Coordination', 
            h2: 'Mr Muhammad Imran Malik', 
            phone: ' Phone: +92-51-90851004', 
            email: 'Email: dircoord@nust.edu.pk', 
            address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
        }, 
        { 
            h1: 'Deputy Director Coordination', 
            h2: 'Dr Mariam Kathleen Gomez', 
            phone: 'Phone: +92-51-90851038', 
            email: 'Email: ddcoord@nust.edu.pk', 
            address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
        },
          { 
            h1: 'Deputy Director Monitoring & Compliance', 
            h2: 'Mr Ijaz Ahmed', 
            phone: ' Phone: +92-51-90851037', 
            email: 'Email: dd.monitoring@nust.edu.pk', 
            address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
        },
           { 
            h1: 'SO to Rector NUST', 
            h2: 'Mr Qaisar Irshad', 
            phone: ' Phone: +92-51-90851003', 
            email: 'Email: so-rector@nust.edu.pk', 
            address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
        },
            { 
                h1: 'Senior Assistant Director Rector Sectt (Strategic Cell)', 
                h2: 'Ms Rehma Rabab Hyder', 
                phone: 'Phone: +92-51-90851181', 
                email: ' Email: srad.strategy@nust.edu.pk', 
                address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
            },
             { 
                h1: 'Assistant Director Coordination', 
                h2: 'Mr Humayun Raja', 
                phone: ' Phone: +92-51-90851038', 
                email: 'Email: adcoord@nust.edu.pk', 
                address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
            },
              { 
                h1: 'Operator to Rector', 
                h2: 'Mr Hasnain Abbas', 
                phone: 'Phone: +92-51-90851001', 
                address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
            },
               { 
                h1: 'Personal Secretary to Rector', 
                h2: 'Mr Muhammad Iqbal',  
                address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
            },
                { 
                    h1: 'Student Liaison Officer', 
                    h2: 'Ms Zoha Tariq',  
                    email: 'Email: slo@nust.edu.pk', 
                    address: 'Rector Sectt, Main Office, National University of Sciences & Technology, H-12, Islamabad, Pakistan' 
                },
    ];
    return(
        <>
         <div className='container my-5'>
         <div className="row" >
                {employeedata.map((item, index) => (
                  <div className="col-md-6 mb-4" key={index}>
                    <div className="card h-100 shadow-sm border-0 rounded-3" style={{ backgroundColor: 'rgba(249, 250, 250, 1)'}}>
                     <div className="card-body" style={{ fontfamily: 'Open Sans, sans-serif'}}>
                        
                        <h5 className=" my-1 " style={{ color: 'rgba(13, 72, 119, 1)'}}>
                        {item.h1}</h5>

                        <h6 className="text-dark my-1 fw-bold " >
                        {item.h2}</h6>

                        {item.phone && <p className="text-muted my-1 " >
                         <i className="fa fa-phone me-2"></i>{item.phone}</p>}

                        {item.email && <p className="text-muted my-1 " >
                        <i className="fa fa-envelope me-2"></i>{item.email}</p>}

                        <p className="text-muted my-1" >
                        {item.address}</p>

                        </div>
                        </div>
                    </div>
                  
                ))}
              </div>
              </div>
              
        
        </>
    );
}

export default EmployeeContact;

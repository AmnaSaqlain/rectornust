import React from 'react';
 
const Legacy = () => {
    
        const newsData = [
    { img: 'legacy1.jpg', title: 'Lt Gen (Retd) Engr Syed Shujaat Hussain', description: '  1991 - 2007 (The Founding Rector)'},
    { img: 'legacy2.jpg', title: 'Lt Gen (Retd) Engr Muhammad Asghar', description: '  2007 - 2016' },
    { img: 'legacy3.jpg', title: 'Lt Gen (Retd) Naweed Zaman', description: '  2016 - 2020' },
    { img: 'legacy4.jpg', title: 'Lt Gen (Retd) Engr Javed Mahmood Bukhari', description: '  2020 - 2024' },
   
  ];

  return (
    <section className="container my-5">
      <h2 className="fw-bold mb-2">LEGACY</h2>
      <hr/>

      <div className="row my-2">
        {newsData.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100  border-0">
              <img
                src={`/images/${item.img}`}
                alt={item.title}
                className="card-img-top"
                style={{ height: '300px', objectFit: 'cover'}}
              />
              <div className="card-body border-0" style={{color: 'rgba(0, 59, 110, 0.98)',}}>
                
                <h4 className="card-title ">{item.title}</h4>
              

              <p className='card-text  text-muted'> { item.description}</p>
              </div>
                  
                
            </div>
          </div>
        ))}
      </div>
      </section>
      );
      };
      
    
    


export default Legacy;
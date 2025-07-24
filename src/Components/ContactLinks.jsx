import React from 'react';
import { Link } from 'react-router-dom';



const ContactLinks = () => {
     const linksdata = [
    { text: 'About NUST', url: '/' },
    { text: 'Rector’s Message', url: '/' },
    { text: 'Offices', url: '/' },
    { text: 'Media & Events', url: '/' },
    { text: 'Downloads', url: '/' },
    { text: 'Contact Us', url: '/' },
  ];

    return(
        <>
         <div class='container '>
                <h3 className='fw-bold text-center' style={{color: 'rgba(13, 72, 119, 1)'}}>Important Links</h3>
                
          
        <div className='mx-4'>
                {linksdata.map((link, i) => (
                    

                  <Link 
                  to={link.url} 
                  key={i} 
                  className=" link-box text-decoration-none text-white d-flex align-items-center justify-content-between flex-grow-1 px-3 mb-2" 
                  
                  style={{
                    backgroundColor: '#003b6e',
                    height: '48px',
                    display: 'flex',
                    borderLeft: '8px solid #6c757d',
                    width: '100%',
                    paddingLeft: '12px'
                  }}
                  >
                    <span >{link.text} 
                        {i === 0 && <i className="fa fa-chevron-right mx-4"></i>}</span>
                    
                    </Link>
                  
                ))}
              </div>
              </div>
             
            
          
    

            
        </>
    );

}
export default ContactLinks;
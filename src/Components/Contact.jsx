import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeContact from './EmployeeContact';
import ContactLinks from './ContactLinks';


const Contact = () => {
    
    return(

        <section className="container pt-4 overflow-hidden px-3">
        <p> 
          <Link to='/' className="text-secondary px-3"><i className="fa fa-home"></i></Link>
          <span className='mx-3'><i className="fa fa-chevron-right"></i></span>
          <span className='mx-3' style={{color: 'rgba(0, 59, 110, 0.98)'}}> Resources & Offices</span>
          <span className='mx-3 text-muted'><i className="fa fa-chevron-right"></i></span>
          <span className='mx-3 text-muted'> Rector Secteriat-The Lodestar</span>
        </p>

        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
        <h3 className='text-dark fs-1 fw-bold'>  Rector Secteriat-The Lodestar</h3>
        <p> Rector’s Secretariat acts as the helm that impels the university forward in its strategic development & comprehensive advancement. It communicates the overarching vision to the NUST hierarchy and determines the direction of its overall course of action. 
            It provides the enabling leadership and governance framework together with detailed policy guidelines for mission realization to the planning, knowledge, research & development and innovation ecosystem of the university. 
            Most significantly, the Secretariat serves as the chief custodian, and a linchpin of NUST with all its entities. It plays role of the standing facilitator of the core NUST values of merit, the pursuit of excellence, integrity, diversity and inclusivity and social impact.
            </p>

        <EmployeeContact/>

        </div>

        <div className='col-md-4'>
           <ContactLinks/>

        </div>

        </div>
        </div>
        
        </section>
    );
}

export default Contact;


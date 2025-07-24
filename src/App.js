import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LegacyPage from './Pages/LegacyPage';
import ScrollToTop from './Components/ScrolltoTop';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Eventspage from './Pages/Eventspage';
import Eventbtnpage from './Pages/EventbtnPage';
import Eventsbtnpage from './Pages/Eventsbtnpage';
import MoreStoriesPage from './Pages/MoreStoriesPage';
import RectorVisitPage from './Pages/RectorVisitPage';
import ContactPage from './Pages/ContactPage';

function App(){
  return(
     <Router>
      <ScrollToTop/>
      <Header/>
      <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/Legacy" element={<LegacyPage/>} />
         <Route path="/Events" element={<Eventspage/>} />
         
         <Route path="/Eventbtnpage" element={<Eventbtnpage/>} />
         <Route path="/Eventsbtnpage" element={<Eventsbtnpage/>} />
         <Route path="/MoreStoriesPage" element={<MoreStoriesPage/>} />
          <Route path="/RectorVisitPage" element={<RectorVisitPage/>} />
          <Route path="/ContactPage" element={<ContactPage/>} />

         <Route path="/Stories" element={<Eventspage/>} />


      </Routes>
      <Footer/>
  </Router>
  );
}

  export default App;
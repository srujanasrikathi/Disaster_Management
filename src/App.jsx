import React from 'react';
import Dummy from './Dummy/Dummy';
import Preparedness from './Preparedness/Preparedness';
import Weather from './Weather/Weather';
// import Registration from './Volunteer/Registarion/Registration';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import ButtonComponent from './project/new';
import Both from './community/both';
import Layout from './PreviousEvents/news/layout';
import Slick from './PreviousEvents/slicks/slick';
import Ap from './PreviousEvents/news/ap';
import Ts from './PreviousEvents/news/ts';
import Tamil from './PreviousEvents/news/tamil';
import Kerala from './PreviousEvents/news/kerala';
import Timeline from './PreviousEvents/timeline/timeline';
import Registration from './Volunteer/Registarion/Registration';
import Log from './Volunteer/Log/Log';

  function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Dummy />} />
      <Route path="/preparedness" element={<Preparedness />} />
      <Route path="/weather" element={<Weather />} />
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/PreviousEvents' element={<Ap/>}/>
      <Route path='/CommunityForum' element={<Both/>}/>
    </Routes>
    </>
  )
}

export default App

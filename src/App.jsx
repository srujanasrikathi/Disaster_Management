import React from 'react';
import Dummy from './Dummy/Dummy';
import Preparedness from './Preparedness/Preparedness';
import Weather from './Weather/Weather';
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
      {/* <Nav/>
      <HeroPage1/>
      <ChatAI/> */}
      {/* <Dummy/> */}
      {/* <Preparedness/> */}
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dummy/>}  />
            <Route path='/WeatherUpdates' element={<Weather/>}  />
            <Route path='/Preparedness' element={<Preparedness/>} />
            <Route path='/Registration' element={ <Registration/>} />
            <Route path='/EmergencyContacts' element={<ButtonComponent/>}/>
            <Route path='/CommunityForum' element={<Both/>} />
            <Route path='/PreviousEvents' element={<Layout/>} />
            <Route path='/ap' element={<App/>} />
            <Route path='/ts/tsst' element={<Ts/>} />
            <Route path='/tamil/tamilst' element={<Tamil/>} />
            <Route path='/kerala/keralast' element={<Kerala/>} />
            <Route path='/Log' element={<Log/>} />
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App

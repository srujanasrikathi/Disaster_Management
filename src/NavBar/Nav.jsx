import React, { useState } from 'react';
import './Nav.css';
import { FaHome } from "react-icons/fa";
import { TbAlertSquareFilled } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiContactsFill } from "react-icons/ri";
import { GiDiscussion } from "react-icons/gi";
import { FaHandsHelping, FaDonate } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Preparedness from '../Preparedness/Preparedness'; 
// import { Navigate } from 'react-router-dom';
import { Outlet , Link } from 'react-router-dom';


function Nav() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
         
    return (
        <div>
            <div className='nav_container'>
            <div className='inner_nav'>
                    <div className='nav_logo'> 
                        <span>R</span>escue<span>R</span>eady
                    </div>
                    <div className='nav_options'>
                        
                       <Link to="/" className="link-style"> <div className='options'><FaHome />&nbsp;Home</div></Link>
                        <Link to='/PreviousEvents' className="link-style"><div className='options'  ><TbAlertSquareFilled />&nbsp;Previous Events</div></Link>
                       <Link to='/WeatherUpdates'className="link-style" ><div className='options'><TiWeatherPartlySunny />&nbsp;Weather Updates</div></Link> 
                       <Link to='/EmergencyContacts' className='link-style'> <div className='options'><RiContactsFill />&nbsp;Emergency Contacts</div></Link>
                        <Link to='/CommunityForum' className="link-style"><div className='options'><GiDiscussion />&nbsp;Community Forum</div></Link>
                        
                    </div>
                    <div className='nav_profile'>
                      <Link to='/Registration' className='nav_regis'> <div className='nav_login'>Register/Login</div></Link> 
                    </div>

                     <div className='hamburger_icon' onClick={toggleSidebar}>
                        <GiHamburgerMenu style={{ width: '50px', height: '25px' }} />
                    </div>
                </div>
            </div>

            
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className='sidebar_header'>
                    <AiOutlineClose className='close_icon' onClick={toggleSidebar} />
                    <div className='sidebar_logo'> 
                        <span>R</span>escue<span>R</span>eady
                    </div>
                </div>
                <div className='sidebar_options'>
                <Link to="/" className="link-style"> <div className='options'><FaHome />&nbsp;Home</div></Link>
                    <div className='sidebar_item'><TbAlertSquareFilled />&nbsp;Previous Events</div>
                    <Link to='/WeatherUpdates'className="link-style" ><div className='options'><TiWeatherPartlySunny />&nbsp;Weather Updates</div></Link>
                    <Link to='/EmergencyContacts' className='link-style'> <div className='options'><RiContactsFill />&nbsp;Emergency Contacts</div></Link>
                    <Link to='/CommunityForum' className="link-style"><div className='options'><GiDiscussion />&nbsp;Community Forum</div></Link>
                    <div className='sidebar_item sidebar_login'>Login/SignIn</div>
                </div>
            </div>

            
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </div>
    );
}

export default Nav;

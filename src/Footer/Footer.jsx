import React from 'react'
import './Footer.css';
import { FaHeart } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { TbAlertSquareFilled } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { RiContactsFill } from "react-icons/ri";
import { GiDiscussion } from "react-icons/gi";
import { FaHandsHelping, FaDonate } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
 function Footer() {
  return (
    <div>
      <footer className='footer_container'>
        <div className='UpperFooter'>
          <div className='footer_title'><span>R</span>escue<span>R</span>eady
            <p>Be Raedy For Tomorrow , Today: Your Guide to Preparedness</p>
          </div>
          <div className='footer_social_media'>
            <div><FaSquareInstagram size='45px' color='#ff006e' /></div>
            <div><BsTwitterX size='42px' /></div>
            <div><BsFillThreadsFill size='45px' /></div>
            <div><FaFacebook size='45px' color='#0077b6' /></div>
          </div>
          <div className='footer_options'><div className='options'><FaHome />&nbsp;Home</div>
            <div className='options'><TbAlertSquareFilled />&nbsp; Previous Events</div>
            <div className='options'><TiWeatherPartlySunny />&nbsp;Weather Updates</div>
            <div className='options'><RiContactsFill />&nbsp;Emergency Contacts</div>
            <div className='options'><GiDiscussion />&nbsp;Community Forum</div>   
        </div>
        </div>
        <div className='LowerFooter'>Thank &nbsp;<FaHeart color='red' /> &nbsp;You</div>
      </footer>
    </div>
  )
}
export default Footer;

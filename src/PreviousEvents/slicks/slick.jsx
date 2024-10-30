import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flood1 from "../../assets/images/flood1.webp"
import cyl1 from "../../assets/images/cycl1.jpg"
import land1 from "../../assets/images/land1.jpeg"
import './slick.css'



function Slick() {
  return (
   <>
   <div className="slides">
    <div className="slides1">
    <ReactSlick/>
    </div>
   </div>
   </>
  )
}

function ReactSlick() {
    const settings = {
        // dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 1500,
        arrows:false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    speed: 400,
                }
            },
            {
  
            }
        ]
    }
  return (
    <div>
      <Slider {...settings}>
        <div  >
            <div style={{height:'50svh', backgroundImage:`url(${flood1})`,backgroundPosition: 'center',
            backgroundSize: 'cover'}}> </div>
        </div>
        <div  > 
            <div style={{height:'50svh',backgroundImage:`url(${cyl1})`,backgroundPosition: 'center',
            backgroundSize: 'cover' }}> </div>
        </div>
        <div  > 
            <div style={{height:'50svh',backgroundImage:`url(${land1})`,backgroundPosition: 'center',
            backgroundSize: 'cover' }}> </div>
        </div>
        
      </Slider>
    </div>
  )
  }

export default Slick;

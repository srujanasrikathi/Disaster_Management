import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slick.css';

const WeatherSlick = ({ cities }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoSpeed: 1000,
    autoplay:true,
    arrows:false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const isRainyWeather = (description) => {
    return description.toLowerCase().includes('rain');
  };

  const handleRainButtonClick = () => {
    alert('It is raining or will rain in the city!');
  };

  return (
    <div className='slick-container'>
      <Slider {...settings}>
        {cities.map((city, index) => (
          <div key={index} className='slick-item'>
            <div className='weather-card'>
              {/* City Name */}
              <h2>{city.name}</h2>

              {/* Weather Icon */}
              <img src={city.icon} alt={city.weather} />

              {/* Weather Description */}
              <div className='weather-description'>
                <p>{city.weather}</p>
              </div>

              {/* Temperature */}
              <div className='temperature'>
                <span>{city.temperature}°C</span>
              </div>

              {/* Rain Alert Button (if applicable) */}
              {/* {isRainyWeather(city.weather) && (
                <button onClick={handleRainButtonClick} className='rain-alert-button'>
                  Rain Alert
                </button>
              )} */}

              {/* Additional Weather Information */}
              <div className='additional-info'>
                <p>Wind Speed: {city.windSpeed} m/s</p>
                <p>Pressure: {city.pressure} hPa</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WeatherSlick;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHome } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import WeatherSlick  from '../components/Slick';
const weatherApiKey = '43951ccaf40238d378901e2be7f4795b';
import './Weather.css';
import Preparedness from '../Preparedness/Preparedness';
import { Link } from 'react-router-dom';

const MapUpdater = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 10);
    }
  }, [position, map]);
  return null;
};

// Array of cities for which to fetch weather data
const cityNames = ["Hyderabad", "Chennai", "Amaravati", "Thiruvananthapuram", "Bengaluru", "Mumbai", "Delhi", "Kolkata"];

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('');
  const [position, setPosition] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [citiesWeather, setCitiesWeather] = useState([]); // State to store weather data for all cities

  const fetchWeatherByCoords = (lat, lon) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`;
    axios
      .get(apiURL)
      .then((response) => {
        setWeatherData(response.data);
        setPosition([lat, lon]);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch weather data. Please try again.');
        setLoading(false);
      });
  };

  const fetchWeatherByCity = (cityName) => {
    setLoading(true);
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weatherApiKey}`;
    axios
      .get(apiURL)
      .then((response) => {
        setWeatherData(response.data);
        setPosition([response.data.coord.lat, response.data.coord.lon]);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch weather data. Please try again.');
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeatherByCity(city);
    } else {
      setError('Please enter a city name.');
    }
  };

   useEffect(() => {
    const fetchWeatherForCities = async () => {
      const weatherResponses = await Promise.all(
        cityNames.map((city) =>
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`)
        )
      );
      const citiesWeatherData = weatherResponses.map((response) => ({
        name: response.data.name,
        weather: response.data.weather[0].description,
        temperature: Math.round(response.data.main.temp),
        windSpeed: response.data.wind.speed,
        pressure: response.data.main.pressure,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      }));
      setCitiesWeather(citiesWeatherData);
    };

    fetchWeatherForCities().catch((err) => setError("Error fetching weather data for cities."));
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId); // Clean up the interval
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeatherByCoords(lat, lon);
        },
        () => {
          setError('Unable to retrieve your location. Please allow location access or enter a city manually.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser. Please enter a city manually.');
      setLoading(false);
    }
  }, []);

  const isRainyWeather = (description) => {
    return description.toLowerCase().includes('rain');
  };

  // const handleRainButtonClick = () => {
  //    <Preparedness/>
  // };

  return (
    <>
      <div className='app-container-d'>
        <div className='searchbar-d'>
          <div className='searchbar-component-d'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Enter city name'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <button type='submit'>Search</button>
            </form>
          </div>
        </div>

        <div className='location-display-d'>
          <div className='location-icon-name-d'>
            <div className='icon-d'>
              <FaHome size={30} color="black" />
            </div>
            <div className='location-name-d'>
              {weatherData && <p>&nbsp;&nbsp;{weatherData.name}</p>}
            </div>
          </div>
          <div className='display-load-error-d'>
            {loading && <p>Loading...</p>}
            {/* {error && <p>{error}</p>} */}
          </div>
        </div>

        <div className='weather-display-d'>
          <div className='weather-info-d'>
            {weatherData && (
              <div>
                <div className='header-row-d'>
                  <div className='label-container-d'>
                    <div className='label-weather-d'>Current Weather</div>
                    <div className='label-updatetime-d'>{currentTime}</div> {/* Time is displayed here */}
                  </div>
                </div>
                <div className='summary-container-d'>
                  <div className='Overview-current-temperature-d'>
                    <img
                      src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                      alt={weatherData.weather[0].description}
                    />
                    <a className='summaryTemperatureHover-d'>
                      {Math.round(weatherData.main.temp)}
                      <span className='summaryTemperatureCompact-d'>°C</span>
                    </a>
                    <div className='summaryCaptionCompact-d'> {weatherData.weather[0].description}</div>
                    {isRainyWeather(weatherData.weather[0].description) && (
                     <Link to='/Preparedness'> <button   className='rain-alert-button-d'>
                        Rain Alert
                      </button></Link>
                    )}
                  </div>
                </div>
                <div className='weather-data-d'>
                <div className='weather-humidity-d'><h3>Humidity: </h3>&nbsp;&nbsp; <p>{weatherData.main.humidity}%</p></div>
                <div className='weather-windspeed-d'><h3>Wind Speed:</h3> &nbsp;<p>{weatherData.wind.speed} m/s </p></div>
                <div className='weather-pressure-d'><h3>Pressure:</h3> &nbsp;&nbsp;&nbsp;<p>{weatherData.main.pressure} hPa </p></div>
                </div>
              </div>
            )}
          </div>

          <div className='map-container-d'>
            {position && (
              <MapContainer center={position} zoom={10} style={{ height: '350px', width: '100%' }}>
                <TileLayer
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='&copy; OpenStreetMap contributors'
                />
                <Marker position={position}>
                  <Popup>{weatherData ? weatherData.name : 'Your Location'}</Popup>
                </Marker>
                <MapUpdater position={position} />
              </MapContainer>
            )}
          </div>
        </div>
      </div>

      <div className='s-container-d'>
        <WeatherSlick cities={citiesWeather} />
      </div>
    </>
  );
};

export default Weather;

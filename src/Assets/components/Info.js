import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import temp from '../images/temp.png';
import cloudy from '../images/cloudy.png';
import location from '../images/location.png';
import '../components/styles.css';
import { useLocation } from 'react-router-dom';

const RedirectedComponent = () => {
  const location = useLocation();
  const cityName = new URLSearchParams(location.search).get('city');
  return cityName;
};

const Infosec = () => {
  const cityName = RedirectedComponent();
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const apikey = "988128917ba505c981c0e4c8fe839fae";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;

  useEffect(() => {
    const checkWeather = async () => {
      const response = await fetch(apiUrl + `&appid=${apikey}`);
      const data = await response.json();

      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = data.main.temp + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".Visibility").innerHTML = data.visibility;
      document.querySelector(".AirP").innerHTML = data.main.pressure + "hPa";
      document.querySelector(".Wind").innerHTML = data.wind.speed + "m/s";

      // Get current time and date
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);

      const date = new Date().toLocaleDateString();
      setCurrentDate(date);
    };

    checkWeather();
  }, [apiUrl, apikey]);

  return (
    <Container fluid className="bg-color p-4">
       

      <Container className="mt-3">
      <Row>
      <Col lg={6} sm={6}>
        <span className='city bfont'>
          Cityname  
        </span>
        <span><img src={location} alt="locate" style={{ width: '55px', height: '49px'}} /></span>
      </Col>
    </Row>

    <Row className="d-flex justify-content-center align-items-center mt-3">
      <Col lg={6} sm={6} className="text-end ">
        <img src={temp} alt="temperature" />
        <span className="temp bfont">Temperature</span>
      </Col>
      <Col lg={6} sm={6} className="text-center mt-3">
        <span className="ms-2">
          <img src={cloudy} alt="clouds" />
        </span>
      </Col>
    </Row>

        <Row>
          <Col lg={6} sm={6} className="text-center mt-3">
            <p className="date">{currentDate}</p>
          </Col>
          <Col lg={6} sm={6} className="text-end">
            <p className="time">{currentTime}</p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col lg={3} sm={6} className="text-center mb-3">
            <div>Humidity</div>
            <div className="humidity">99%</div>
          </Col>
          <Col lg={3} sm={6} className="text-center mb-3">
            <div>Visibility</div>
            <div className="Visibility">8km</div>
          </Col>
          <Col lg={3} sm={6} className="text-center mb-3">
            <div>Air Pressure</div>
            <div  className="AirP">1005hPa</div>
          </Col>
          <Col lg={3} sm={6} className="text-center mb-3">
            <div>Wind</div>
            <div className="Wind">2mph</div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Infosec;

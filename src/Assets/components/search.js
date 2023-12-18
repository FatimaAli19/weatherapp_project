import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import '../components/styles.css';
import HeroSec from './HeroSection';

const SearchLocation = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== '') {
      // Redirect to another component with the city as a parameter
      navigate(`/redirected?city=${encodeURIComponent(city)}`);
    }
  };

  return (
    <>
    
    <div className='container-fluid bg-dark p-0 m-0'>
      <InputGroup className="mb-0" style={{ width: '711px', height: '66px', margin: 'auto' }}>
        <FormControl
          placeholder="Search location..."
          aria-label="Search location..."
          aria-describedby="basic-addon2"
          className="d-flex align-items-center mt-2"
          style={{ height: '50px', borderRadius: '40px' }}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
      </InputGroup>
    </div>
    <HeroSec/>
    </>
  );
};

export default SearchLocation;

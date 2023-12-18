import React from 'react';
import './styles.css';

function Footersec() {
  return (
    <footer className="footer bg-color py-4"> {/* Add py-4 for top and bottom padding */}
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <h6>&copy; All rights reserved by @WeatherSphere</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footersec;

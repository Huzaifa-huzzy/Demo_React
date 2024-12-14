import React from 'react';
import './Services.css';  // Import the CSS file

// Images for services (You can replace these with your actual images)
import serviceImage1 from './images/serviceimg1.jpg';
import serviceImage2 from './images/serviceimg2.jpg';
import serviceImage3 from './images/serviceimg3.jpg';
import Header from '../../Header/Header';

const Services = () => {
  return (
    <> 
    <Header/>
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      
      <div className="service-card">
        <img className="service-image" src={serviceImage1} alt="Service 1" />
        <div className="service-content">
          <h2 className="service-title">Vehicle Maintenance</h2>
          <p className="service-description">
            Keep your car running smoothly with our comprehensive maintenance services, including oil changes, tire rotations, and more.
          </p>
        </div>
      </div>

      <div className="service-card">
        <img className="service-image" src={serviceImage2} alt="Service 2" />
        <div className="service-content">
          <h2 className="service-title">Customizations</h2>
          <p className="service-description">
            Upgrade the look and performance of your vehicle with our custom modifications, from performance chips to aesthetic upgrades.
          </p>
        </div>
      </div>

      <div className="service-card">
        <img className="service-image" src={serviceImage3} alt="Service 3" />
        <div className="service-content">
          <h2 className="service-title">Repairs</h2>
          <p className="service-description">
            Get fast and reliable repair services for all vehicle makes and models. From engine repairs to bodywork, we handle it all.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;

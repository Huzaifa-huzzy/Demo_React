import React from 'react';
import './About.css'; // Import the CSS file
import carImage from './images/mustang.webp'; // Import the local image
import Header from '../../Header/Header';

const CarAboutPage = () => {
  return (
    <>
    <Header/>
    <div className="container">
      <h1>About the Car</h1>
      <img
        className="car-image"
        src={carImage} // Use the imported image here
        alt="Car"
      />
      <p className="car-description">
        This is a top-of-the-line sports car designed for performance, comfort,
        and style. It features cutting-edge technology and advanced engineering to
        ensure an unforgettable driving experience.
      </p>
      <ul>
        <li>Engine: 3.0L V6 Turbocharged</li>
        <li>Transmission: 8-Speed Automatic</li>
        <li>Top Speed: 250 mph</li>
        <li>0-60 mph: 3.1 seconds</li>
        <li>Interior: Premium Leather Seats</li>
      </ul>
    </div>
    </>
  );
};

export default CarAboutPage;


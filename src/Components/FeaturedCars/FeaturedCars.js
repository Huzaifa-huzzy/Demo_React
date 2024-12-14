import React, { useEffect, useState } from 'react';
import './FeaturedCars.css';  // Import the CSS file for styling
import toyotaCamryImage from './images/fimg1.jpg';  // Import images
import bmwM3Image from './images/fimg2.jpg';
import audiA4Image from './images/fimg3.jpg';
import mercedesCClassImage from './images/fimg4.jpg';
import fordMustangImage from './images/fimg5.jpg';
import teslaModelSImage from './images/fimg6.jpg';  // New image for Tesla Model S
import porsche911Image from './images/fimg7.jpg';  // New image for Porsche 911
import lexusRXImage from './images/fimg8.jpg';  // New image for Lexus RX

const FeaturedCars = () => {
  const [inView, setInView] = useState([]);

  // Static car data with imported images
  const cars = [
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: '$28,000',
      description: 'A comfortable and reliable midsize sedan.',
      imageUrl: toyotaCamryImage,
    },
    {
      make: 'BMW',
      model: 'M3',
      year: 2023,
      price: '$72,000',
      description: 'High-performance sports sedan with sharp handling.',
      imageUrl: bmwM3Image,
    },
    {
      make: 'Audi',
      model: 'A4',
      year: 2021,
      price: '$40,000',
      description: 'Elegant design and great technology features.',
      imageUrl: audiA4Image,
    },
    {
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2022,
      price: '$45,000',
      description: 'Luxurious sedan with a smooth ride and high-end features.',
      imageUrl: mercedesCClassImage,
    },
    {
      make: 'Ford',
      model: 'Mustang',
      year: 2022,
      price: '$55,000',
      description: 'Classic American muscle car with modern features.',
      imageUrl: fordMustangImage,
    },
    {
      make: 'Tesla',
      model: 'Model S',
      year: 2023,
      price: '$90,000',
      description: 'Electric performance sedan with cutting-edge technology.',
      imageUrl: teslaModelSImage,
    },
    {
      make: 'Porsche',
      model: '911',
      year: 2023,
      price: '$115,000',
      description: 'Iconic sports car with exceptional performance and luxury.',
      imageUrl: porsche911Image,
    },
    {
      make: 'Lexus',
      model: 'RX',
      year: 2022,
      price: '$50,000',
      description: 'Luxury SUV with a smooth ride and high-tech features.',
      imageUrl: lexusRXImage,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setInView((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 } // Trigger the intersection when 50% of the card is in view
    );

    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className='main-container'>
      <div className="featured-cars-container">
        <h1 className="title">Featured Cars</h1>
        <div className="car-list">
          {cars.map((car, index) => (
            <div
              key={index}
              data-index={index}
              className={`car-card ${inView.includes(index) ? 'fade-in' : ''}`}
            >
              <div className="image-container">
                <img
                  src={car.imageUrl}
                  alt={`${car.make} ${car.model}`}
                  className="car-image"
                />
                <div className="car-info">
                  <h2 className="car-name">{car.make} {car.model}</h2>
                  <p className="car-price">{car.price}</p>
                </div>
                <div className="car-details-overlay">
                  <div className="car-details">
                    <p><strong>Model:</strong> {car.model}</p>
                    <p><strong>Year:</strong> {car.year}</p>
                    <p><strong>Description:</strong> {car.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;

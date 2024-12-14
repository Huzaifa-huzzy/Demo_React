import React, { useEffect, useState } from 'react';
import './Other.css';
import carImage from './images/otherimg1.jpg'; // Import your image here

const InfoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Observer callback function
  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true); // Trigger fade-in when the section is in the viewport
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.3, // Trigger when 20% of the section is visible
    });

    const section = document.querySelector('.info-section');
    if (section) {
      observer.observe(section);
    }

    // Clean up the observer on unmount
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`info-section ${isVisible ? 'fade-in-left' : ''}`}>
      <div className="image-container">
        <img src={carImage} alt="Car" className="car-image" />
      </div>
      <div className="details-container">
        <h2 className="section-title">Car Model Name</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus
          quam et mauris placerat, quis euismod velit tincidunt. Sed suscipit
          vehicula massa, et tempor lectus euismod sed.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;

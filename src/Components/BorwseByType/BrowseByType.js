import React, { useEffect, useState, useRef } from 'react';
import './BrowseByType.css';

// Importing car type logos from the new folder structure
import suvLogo from './images/suv-logo.png';
import sedanLogo from './images/sedan-logo.png';
import hatchbackLogo from './images/hatchback-logo.png';
import coupeLogo from './images/coupe-logo.png';
import hybridLogo from './images/hybrid-logo.png';

const BrowseByType = () => {
  const [isVisible, setIsVisible] = useState(false);
  const browseSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the section is at least 30% visible
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setIsVisible(true); // Trigger fade-in when 30% visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is in the viewport
      }
    );

    // Start observing the section
    if (browseSectionRef.current) {
      observer.observe(browseSectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (browseSectionRef.current) {
        observer.unobserve(browseSectionRef.current);
      }
    };
  }, []);

  const carTypes = [
    { type: 'SUV', logo: suvLogo },
    { type: 'Sedan', logo: sedanLogo },
    { type: 'Hatchback', logo: hatchbackLogo },
    { type: 'Coupe', logo: coupeLogo },
    { type: 'Hybrid', logo: hybridLogo },
  ];

  return (
    <section
      ref={browseSectionRef}
      className={`browse-section ${isVisible ? 'fade-in' : ''}`}
    >
      <div className="browse-container">
        <h2 className="browse-title">Browse by Type</h2>
        <div className="car-types">
          {carTypes.map((car) => (
            <button
              key={car.type}
              className="car-type-button"
              aria-label={`Browse ${car.type}`}
            >
              <img
                src={car.logo}
                alt={`${car.type} logo`}
                className="car-type-logo"
              />
              {car.type}
            </button>
          ))}
        </div>
      </div>
      <a href="/all-cars" className="view-all-btn">
        View All
      </a>
    </section>
  );
};

export default BrowseByType;

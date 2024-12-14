import React, { useEffect, useRef, useState } from 'react';
import './Choose.css';  // Import the CSS for styling

// Import the icon images
import icon1 from './images/serviceimg1.png';
import icon2 from './images/teamimg1.png';
import icon3 from './images/priceimg1.png';
import icon4 from './images/supportimg1.png';

const ChooseUs = () => {
  const [isVisible, setIsVisible] = useState(Array(4).fill(false)); // Track visibility of each card

  // References for the cards
  const cardRefs = useRef([]);

  // Static data for the "Why Choose Us" section
  const reasons = [
    {
      icon: icon1,
      title: 'Quality Service',
      description: 'We provide top-quality services to ensure your satisfaction.',
    },
    {
      icon: icon2,
      title: 'Expert Team',
      description: 'Our team is highly skilled and experienced in the industry.',
    },
    {
      icon: icon3,
      title: 'Affordable Prices',
      description: 'We offer competitive pricing without compromising on quality.',
    },
    {
      icon: icon4,
      title: 'Customer Support',
      description: 'We provide 24/7 customer support to assist with any issues.',
    },
  ];

  // IntersectionObserver for detecting when the cards enter the viewport
  useEffect(() => {
    const options = {
      root: null,  // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5,  // Trigger when 50% of the card is in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => {
            const updatedState = [...prevState];
            updatedState[index] = true;  // Set the specific card as visible
            return updatedState;
          });
        }
      });
    }, options);

    // Observe each card element
    cardRefs.current.forEach((card) => observer.observe(card));

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="reason-cards">
        {reasons.map((reason, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}  // Assign refs dynamically
            className={`reason-card ${isVisible[index] ? 'animate-up' : ''}`}
          >
            <img src={reason.icon} alt={reason.title} className="reason-icon" />
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;

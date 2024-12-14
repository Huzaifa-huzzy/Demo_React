import React, { useEffect, useRef, useState } from 'react';
import './TeamSection.css';
import johnImage from "./images/teamimg1.webp";
import janeImage from "./images/teamimg2.webp";
import aliceImage from "./images/teamimg3.webp";
import bobImage from "./images/teamimg5.webp";

const Card = ({ name, role, image, contact }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver logic to trigger fade-in effect when the card is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`card ${isVisible ? 'fade-in' : ''}`}
      ref={cardRef}
    >
      <img src={image} alt={name} className="card-img" />
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>
        <div className="card-contact">
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const data = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      image: johnImage,
      contact: { phone: '123-456-7890', email: 'john.doe@example.com' }
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      image: janeImage,
      contact: { phone: '234-567-8901', email: 'jane.smith@example.com' }
    },
    {
      name: 'Michael Lee',
      role: 'UX Designer',
      image: aliceImage,
      contact: { phone: '345-678-9012', email: 'michael.lee@example.com' }
    },
    {
      name: 'Emily Davis',
      role: 'QA Engineer',
      image: bobImage,
      contact: { phone: '456-789-0123', email: 'emily.davis@example.com' }
    }
  ];

  return (
    <div className="team-section">
      <h2 className="team-heading">Our Team</h2>
      <div className="card-list">
        {data.map((person, index) => (
          <Card key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

export default CardList;

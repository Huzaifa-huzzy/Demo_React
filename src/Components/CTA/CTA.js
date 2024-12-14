import React, { useEffect, useRef, useState } from 'react';
import './CTA.css';

const CTA = () => {
  const ctaRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the fade-in animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    // Clean up observer on unmount
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`cta-section ${isVisible ? 'fade-in' : ''}`}
      ref={ctaRef}
    >
      <div className="cta-overlay">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Take the Next Step?</h2>
          <p className="cta-description">
            Join us now and experience the difference. Let us help you achieve your goals with the best tools and expertise.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

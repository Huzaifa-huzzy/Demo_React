import React, { useState } from 'react';
import './Reviews.css'; // Import the CSS for styling

// Reviews Data
const reviews = [
  {
    name: "John Doe",
    rating: 5,
    review: "Great product! Highly recommend. The quality is fantastic, and the customer service was excellent."
  },
  {
    name: "Jane Smith",
    rating: 4,
    review: "Very good service. The product was as described, and delivery was on time. Will definitely order again."
  },
  {
    name: "Sam Wilson",
    rating: 3,
    review: "The product is good, but the packaging could be improved. Overall, I am satisfied."
  },
  {
    name: "Emily Davis",
    rating: 5,
    review: "Amazing! Exceeded my expectations. Very fast shipping and excellent quality. Highly recommended!"
  },
  {
    name: "David Lee",
    rating: 4,
    review: "Great experience overall, but I had a small issue with the tracking info. Still, happy with the purchase."
  },
  {
    name: "Linda Carter",
    rating: 5,
    review: "Fantastic quality! Exactly what I was looking for. I will be coming back for more in the future."
  },
  {
    name: "Michael Johnson",
    rating: 2,
    review: "The item arrived late, and customer support was not helpful. The quality of the product is okay."
  },
  {
    name: "Sarah Brown",
    rating: 4,
    review: "Overall, a good experience. The product quality was as expected. However, the packaging could have been better."
  },
  {
    name: "James Wilson",
    rating: 5,
    review: "Perfect purchase. Everything was exactly as described. Will definitely buy again."
  },
  {
    name: "Olivia Taylor",
    rating: 3,
    review: "Decent product. Not as good as I expected. However, the customer service was friendly."
  }
];

const ReviewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false); // State for fade effect

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
      setFade(false);
    }, 500); // Delay for fade-out effect
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
      setFade(false);
    }, 500); // Delay for fade-out effect
  };

  const renderStars = (rating) => {
    const filledStars = "★".repeat(rating);  // Repeat filled star for rating
    const emptyStars = "☆".repeat(5 - rating); // Remaining empty stars to make 5
    return filledStars + emptyStars;
  };

  return (
    <section className="reviews-slider">
      <h2 className="slider-title">Customer Reviews</h2>
      <div className={`slider-container ${fade ? 'fade-out' : 'fade-in'}`}>
        <div className="review-card">
          <div className="review-header">
            <h3 className="reviewer-name">{reviews[currentIndex].name}</h3>
            <div className="review-rating">{renderStars(reviews[currentIndex].rating)}</div>
          </div>
          <p className="review-text">{reviews[currentIndex].review}</p>
        </div>
        {/* Slider Controls (Next/Prev Buttons) */}
        <div className="slider-controls">
          <button className="prev-btn" onClick={handlePrev}>&lt;</button>
          <button className="next-btn" onClick={handleNext}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;

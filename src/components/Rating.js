import React from 'react';
import '../styles/rating.css';
import { Star } from 'react-feather';

const Rating = ({ value, max = 5 }) => {
  const filledStars = Math.floor(value);
  const emptyStars = max - filledStars;
  
  return (
    <div className="rating">
        {[...Array(filledStars)].map((_, index) => (
            <Star key={index} color="#e9a400" fill='#e9a400' />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
            <Star key={index} color="grey" />
        ))}
        <span className="rating-value">{value}/5</span>
    </div>
  );
};

export default Rating;

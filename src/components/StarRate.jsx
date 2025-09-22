import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRate() {
  const [rating, setRating] = useState(null);
  const [rateColor, setRateColor] = useState(null);

  return (
    <>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <FaStar
            key={index}
            size={22}
            onClick={() => setRating(currentRating)}
            onMouseEnter={() => setRateColor(currentRating)}
            onMouseLeave={() => setRateColor(null)}
            color={currentRating <= (rateColor || rating) ? '#FFD700' : '#ccc'}
          />
        );
      })}
    </>
  );
}

export default StarRate;

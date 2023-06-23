import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackRating = () => {
  const [rating, setRating] = useState(3);
  const [ratingHover, setRatingHover] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, ind) => {
        const RatingValue = ind + 1;

        return (
          <>
            <input
              key={ind}
              type="radio"
              name="rating"
              value={RatingValue}
              onClick={() => setRating(RatingValue)}
              style={{
                display: 'none',
              }}
            />
            <FaStar
              size={24}
              color={
                RatingValue <= (ratingHover || rating) ? '#FFAC33' : '#CEC9C1'
              }
              onMouseEnter={() => setRatingHover(RatingValue)}
              onMouseLeave={() => setRatingHover(null)}
              style={{
                marginRight: 0,
                cursor: 'pointer',
              }}
            />
          </>
        );
      })}
    </>
  );
};

export default FeedbackRating;

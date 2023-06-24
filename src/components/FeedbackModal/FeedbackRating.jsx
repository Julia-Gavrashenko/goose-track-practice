import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const FeedbackRating = () => {
  const [feedbackRating, setFeedbackRating] = useState(0);
  const [ratingHover, setRatingHover] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, ind) => {
        const ratingValue = ind + 1;
    

        return (
          <>
            <input
              key={ind}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setFeedbackRating(ratingValue)}
              style={{
                display: 'none',
              }}
            />
            <FaStar
              size={24}
              color={
                ratingValue <= (ratingHover || feedbackRating) ? '#FFAC33' : '#CEC9C1'
              }
              onMouseEnter={() => setRatingHover(ratingValue)}
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

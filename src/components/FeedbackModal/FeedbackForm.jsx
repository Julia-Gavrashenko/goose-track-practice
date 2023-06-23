// import { useState } from 'react';


import FeedbackRating from './FeedbackRating';
import { FeedbackLayout } from './FeedbackForm.styled';

const FeedbackForm = () => {
  return (
    <FeedbackLayout>
      <form>
        <label>
          Rating
          <FeedbackRating />
        </label>

        <label>
          Review
          <textarea placeholder="Enter text" />
        </label>

        <div>
          <button></button>
        </div>
      </form>
    </FeedbackLayout>
  );
};

export default FeedbackForm;

//   const [rating, setRating] = useState(3);
//   const [ratingHover, setRatingHover] = useState(null);

//   <RatingLabel>Rating</RatingLabel>
//         {[...Array(5)].map((star, ind) => {
//           const RatingValue = ind + 1;

//           return (
//             <>
//               <label>
//                 <RatingInput
//                   key={ind}
//                   type="radio"
//                   name="rating"
//                   value={RatingValue}
//                   onClick={() => setRating(RatingValue)}
//                 />
//                 <FaStar
//                   size={24}
//                   color={
//                     RatingValue <= (ratingHover || rating)
//                       ? '#FFAC33'
//                       : '#CEC9C1'
//                   }
//                   onMouseEnter={() => setRatingHover(RatingValue)}
//                   onMouseLeave={() => setRatingHover(null)}
//                 />
//               </label>
//             </>
//           );
//         })}

import React from 'react';
import ReviewIndexItem from './review_index_item';

const reviewList = (reviews = []) => (
  reviews.map(review => (
    <ReviewIndexItem body={review.body} rating={review.rating} key={review.id}/>
  ))
)



const ReviewIndex = ({bench}) => {

return(
    <div>
      Average Rating: {bench.averageRating || "No reviews yet"}
      <br></br><br></br>
      {reviewList(bench.reviews)}
    </div>
  )
}


export default ReviewIndex;

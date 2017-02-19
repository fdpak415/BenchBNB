import React from 'react';

const ReviewIndexItem = ({rating, body}) => (
    <div>
      <ul>
        <li>Rating: {rating}</li>
        <li>{body}</li>
      </ul>
    </div>
  );


export default ReviewIndexItem;

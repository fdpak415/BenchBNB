import React from 'react';
import {Link} from 'react-router';
import BenchMap from './bench_map';
import ReviewIndex from './reviews/review_index';

const BenchShow = ({bench, benchId, fetchBench}) => {
  const benches = {
    [benchId]: bench
  };
  const routeId = id => `/benches/${id}/review`;

  return(
    <div>
      <Link to='/'>Back to Benches Index</Link>
      <BenchMap benches={benches} bench={bench} singleBench={true} fetchBench={fetchBench}/>
        <ul>
          <h3>{benchId}: {bench.description}</h3>
          <li>Seats: {bench.seating}</li>
          <li>Latitude: {bench.lat}</li>
          <li>Longitude: {bench.lng}</li>
          <li><img src={bench.image_url}/></li>
        </ul>

      <Link to={routeId(benchId)}>Leave a Review</Link>
      <br></br>
      <ReviewIndex bench={bench}/>
    </div>
  )
}

export default BenchShow;

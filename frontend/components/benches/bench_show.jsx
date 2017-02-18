import React from 'react';
import {Link} from 'react-router';
import BenchMap from './bench_map';

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
        </ul>
      <Link to={routeId(benchId)}>Leave a Review</Link>
    </div>
  )
}
//
export default BenchShow;

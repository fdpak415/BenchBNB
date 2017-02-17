import React from 'react';
import {Link} from 'react-router';

const BenchShow = ({bench}) => {
  return(
    <Link to='/'>Back to Benches Index</Link>

    <BenchMap
    <div>
      <ul>
        <h3>{bench.id}: {bench.description}</h3>
        <li>Seats: {bench.seating}</li>
        <li>Latitude: {bench.lat}</li>
        <li>Longitude: {bench.lng}</li>
      </ul>
    </div>
  )
}

export default BenchShow;

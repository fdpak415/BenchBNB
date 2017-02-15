import React from 'react';
import BenchIndex from './bench_index';

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const {bench} = this.props;
    return(
      <div>
        <ul>
          <h3>{bench.id}: {bench.description}</h3>
          <li>Latitude: {bench.lat}</li>
          <li>Longitude: {bench.lng}</li>
        </ul>
      </div>
    )
  }
}

export default BenchIndexItem;

import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';
import React from 'react';


const Search = ({benches, fetchBenches, updateBounds}) => {
  return (
    <div>
      <BenchMap benches={benches} updateBounds={updateBounds}/>
      <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
    </div>
  )
}

export default Search;

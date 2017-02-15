import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';
import React from 'react';


const Search = ({benches, fetchBenches, updateFilter}) => {
  return (
    <div>
      <BenchMap benches={benches} updateFilter={updateFilter}/>
      <BenchIndex benches={benches} />
    </div>
  )
}

export default Search;

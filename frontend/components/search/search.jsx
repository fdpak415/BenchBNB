import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';
import React from 'react';
import FilterForm from './filter_form';

const Search = ({benches, fetchBenches, updateFilter, minSeating, maxSeating}) => {
  return (
    <div>
      <BenchMap benches={benches} updateFilter={updateFilter}/>
      <BenchIndex benches={benches} />
      <FilterForm updateFilter={updateFilter} minSeating={minSeating} maxSeating={maxSeating} />
    </div>
  )
}

export default Search;

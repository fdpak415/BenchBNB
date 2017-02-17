import React from 'react';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, parseInt(e.currentTarget.value))
)

  const FilterForm = ({ minSeating, maxSeating, updateFilter}) => (
      <div>
        <form>
          <label>Min Seating</label>
          <input
            type="number"
            value={minSeating}
            onChange={handleChange('minSeating', updateFilter)}/>

          <br></br><br></br>

          <label>Max Seating</label>
          <input
            type="number"
            value={maxSeating}
            onChange={handleChange('maxSeating', updateFilter)}/>


        </form>
      </div>
    )

export default FilterForm;

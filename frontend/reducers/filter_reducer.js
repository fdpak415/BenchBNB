import {UPDATE_BOUNDS} from '../actions/filter_actions';

const _defaultFilters = Object.freeze({
  bounds: {}
})

const FilterReducer = (state = _defaultFilters, action) => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      const newFilter = {
        [action.filter]: action.value
      };
      return Object.assign({}, state, newFilter);
    default:
      return state;

  }
}

export default FilterReducer;

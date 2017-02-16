import {UPDATE_BOUNDS, UPDATE_FILTER} from '../actions/filter_actions';

const _defaultFilters = Object.freeze({
  bounds: {},
  minSeating: 1,
  maxSeating: 10
})

const FilterReducer = (state = _defaultFilters, action) => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      const newFilter = {
        [action.filter]: action.value
      };
      return Object.assign({}, state, newFilter);
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      }
      return Object.assign({}, state, newFilter)
    default:
      return state;

  }
}

export default FilterReducer;

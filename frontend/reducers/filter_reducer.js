import {UPDATE_BOUNDS} from '../actions/filter_actions';

const _defaultFilters = Object.freeze({
  bounds: {}
})

const FilterReducer = (state = _defaultFilters, action) => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      return Object.assign({}, state, action.bounds)
    default:
      return state;

  }
}

export default FilterReducer;

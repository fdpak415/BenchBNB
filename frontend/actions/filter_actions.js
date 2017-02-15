import {fetchBenches} from './bench_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const changeFilter = (filter, value) => ({
  type: UPDATE_BOUNDS,
  filter,
  value
})

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBenches(getState().filters)(dispatch);
}

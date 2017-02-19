import {RECEIVE_BENCHES, RECEIVE_BENCH, RECEIVE_REVIEW} from '../actions/bench_actions';
import merge from 'lodash/merge';

const _default_state = {

    description: "",
    seating: '',
    lat: '',
    lng: '',
    image_url: '',
    reviews: []

}


const benchesReducer = (state = _default_state, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      const newBench = {[action.bench.id]: action.bench}
      return Object.assign({}, state, newBench);
    case RECEIVE_REVIEW:
    const review = action.review;
    newState[review.bench_id].reviews.push(review)
    return newState;
    default:
      return state;
  }
}

export default benchesReducer;

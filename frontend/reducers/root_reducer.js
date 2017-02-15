import {combineReducers} from 'redux'
import SessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  benches: benchesReducer,
  filters: FilterReducer
})

export default RootReducer;

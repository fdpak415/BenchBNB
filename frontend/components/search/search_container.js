import {connect} from 'react-redux';
import {fetchBenches} from '../../actions/bench_actions';
import Search from './search';
import {selectAllBenches} from '../../reducers/selector';
import {updateFilter} from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
  benches: selectAllBenches(state),
  minSeating: state.filters.minSeating,
  maxSeating: state.filters.maxSeating

})

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search);

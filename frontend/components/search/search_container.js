import {connect} from 'react-redux';
import {fetchBenches} from '../../actions/bench_actions';
import Search from './search';
import {selectAllBenches} from '../../reducers/selector';
import {updateBounds} from '../../actions/filter_actions';

const mapStateToProps = (state) => ({
  benches: selectAllBenches(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches()),
  updateBounds: bounds => dispatch(updateBounds(bounds))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search);

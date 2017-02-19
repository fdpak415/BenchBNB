import { connect } from 'react-redux';

import { fetchBench } from '../../actions/bench_actions';
import { selectBench } from '../../reducers/selector';

import BenchShow from './bench_show';

const mapStateToProps = (state, { params }) => {
  const benchId = parseInt(params.benchId);
  const bench = selectBench(state, benchId);
  return {
    benchId,
    bench
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBench: benchId => dispatch(fetchBench(benchId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);

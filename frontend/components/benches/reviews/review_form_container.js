import {connect} from 'react-redux';
import {createReview} from '../../../actions/bench_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({benches}, ownProps) => ({
  benchId: ownProps.params.benchId
})

const mapDispatchToProps = review => dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

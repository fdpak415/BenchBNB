import {connect} from 'react-redux';
import {signup, login, logout} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors

})

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signup') ? signup : login;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);



const defaultState = {
  session: {
    currentUser: null,
    errors: []
  }
}

const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState;
      newState = Object.assign({}, state, {[current_user]: action.currentUser})
      return newState;
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state, {[current_user]: null, [errors]: action.errors})
      return newState;
    default:
      return state
  }
}

export default SessionReducer;

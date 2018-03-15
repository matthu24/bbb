import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session';
import merge from 'lodash/merge';

export default(state = [],action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return merge({},action.errors)
    case RECEIVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
}

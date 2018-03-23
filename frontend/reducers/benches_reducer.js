
import {RECEIVE_BENCHES} from '../actions/bench';
import merge from 'lodash/merge';


export default (state={},action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BENCHES:
      return merge({},action.benches)
    default:
      return state;
  }

}

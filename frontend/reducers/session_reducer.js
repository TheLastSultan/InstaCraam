import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from 'actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from 'actions/follow_actions';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = ( state = nullUser, action ) => {
  Object.freeze(state);

  const copyState = merge({}, state);

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });

    case RECEIVE_FOLLOW:
      if (copyState.currentUser) {
        const followingsArray = copyState.currentUser.followings;
        if (followingsArray.indexOf(action.follow.followedId) === -1) {
          followingsArray.push(action.follow.followedId);
        }
      }
      return copyState;

    case REMOVE_FOLLOW:
      if (copyState.currentUser) {
        const followingsArray = copyState.currentUser.followings;
        const idx = followingsArray.indexOf(action.follow.followedId);
        if (idx !== -1) {
          followingsArray.splice(idx, 1);
        }
      }
      return copyState;

    default:
      return state;
  }
};

export default SessionReducer;

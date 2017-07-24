import merge from 'lodash/merge';

import {
  RECEIVE_USER_INFO,
  CLEAR_PROFILE
} from 'actions/profile_actions';

const defaultState = () => ({

});

const ProfileReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_USER_INFO:
      return merge({}, defaultState, action.user);

    case CLEAR_PROFILE:
      return merge({}, defaultState);

    default:
      return state;
  }
};

export default ProfileReducer;

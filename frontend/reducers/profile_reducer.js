import merge from 'lodash/merge';

import {
  RECEIVE_USER_INFO
} from 'actions/profile_actions';

const defaultState = () => ({
});

const ProfileReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_INFO:
      return action.user;
    default:
      return state;
  }
};

export default ProfileReducer;

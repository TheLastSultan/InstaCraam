import * as APIUtil from 'util/user_api_util';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors } from './error_actions';
import { receiveCurrentUser } from './session_actions';

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

// Sync
export const receiveUserInfo = user => ({
  type: RECEIVE_USER_INFO,
  user
});

export const clearProfile = () => ({
  type: CLEAR_PROFILE
});

// Async

export const requestProfileInfo = userId => dispatch => {
  return APIUtil.fetchProfileInfo(userId)
    .then( res => dispatch(receiveUserInfo(res)) );
};

export const updateUserProfile = user => dispatch => {
  return APIUtil.updateUserProfile(user)
    .then( res => {
      dispatch(receiveUserInfo(res));
      dispatch(receiveCurrentUser(res));
    });
};

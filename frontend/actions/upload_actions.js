import * as APIUtil from 'util/upload_api_util';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors } from './error_actions';
import { receiveSingleImage } from './image_actions';

// Async
export const uploadPhoto = img => dispatch => {
  return APIUtil.uploadPhoto(img)
    .then( res => dispatch(receiveSingleImage(res)) );
};

import * as APIUtil from 'util/image_api_util';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors } from './error_actions';


export const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';
export const RECEIVE_ALL_IMAGES_FOR_USER = 'RECEIVE_ALL_IMAGES_FOR_USER';
export const RECEIVE_SINGLE_IMAGE = 'RECEIVE_SINGLE_IMAGE';


// Sync
export const receiveAllImagesForUser = images => ({
  type: RECEIVE_ALL_IMAGES_FOR_USER,
  images
});

export const receiveAllImages = images => ({
  type: RECEIVE_ALL_IMAGES,
  images
});

export const receiveSingleImage = image => ({
  type: RECEIVE_SINGLE_IMAGE,
  image
});

// Async
export const requestAllImages = () => dispatch => {
  return APIUtil.fetchAllImages()
    .then( res => dispatch(receiveAllImages(res)) );
};

export const requestSingleImage = image => dispatch => {
  return APIUtil.fetchSingleImage(image)
    .then( res => dispatch(receiveSingleImage(res)) );
};

export const requestAllImagesForUser = userId => dispatch => {
  return APIUtil.fetchAllImagesForUser(userId)
    .then( res => dispatch(receiveAllImagesForUser(res)) );
};

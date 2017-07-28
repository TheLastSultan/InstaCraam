import * as APIUtil from 'util/image_api_util';
import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors } from './error_actions';
import {receiveAllCommentsForPost} from './comment_actions';

export const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';
export const RECEIVE_ALL_IMAGES_FOR_USER = 'RECEIVE_ALL_IMAGES_FOR_USER';
export const RECEIVE_SINGLE_IMAGE = 'RECEIVE_SINGLE_IMAGE';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


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

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = like => ({
  type: REMOVE_LIKE,
  like
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

export const deletePost = (postId) => dispatch => {
  return APIUtil.destroyPost(postId)
    .then( res => dispatch(removePost(postId)) );
};

export const postLike = like => dispatch => {
  return APIUtil.postLike(like)
    .then( res => dispatch(receiveLike(res)) );
};

export const destroyLike = like => dispatch => {
  return APIUtil.destroyLike(like)
    .then( res => dispatch(removeLike(res)) );
};
